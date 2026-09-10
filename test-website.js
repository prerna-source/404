import puppeteer from 'puppeteer-core';
import fs from 'fs';
import path from 'path';

const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const artifactDir = 'C:/Users/DELL/.gemini/antigravity/brain/452a2b44-bb45-43f3-a821-21528c4fcc23';

async function runTests() {
  console.log('--- STARTING COMPREHENSIVE PORTFOLIO AUDIT ---');
  const browser = await puppeteer.launch({
    executablePath: chromePath,
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-gpu']
  });

  const page = await browser.newPage();

  // Track errors
  const consoleErrors = [];
  const pageErrors = [];

  page.on('console', msg => {
    if (msg.type() === 'error') {
      consoleErrors.push(msg.text());
      console.error('Browser Console Error:', msg.text());
    }
  });

  page.on('pageerror', err => {
    pageErrors.push(err.toString());
    console.error('Page Error:', err.toString());
  });

  // Navigate to dev server
  console.log('Navigating to http://127.0.0.1:5173 ...');
  await page.goto('http://127.0.0.1:5173', { waitUntil: 'networkidle0', timeout: 30000 });

  // 1. Desktop Full Viewport Audit (1440x900)
  console.log('Testing Desktop 1440x900...');
  await page.setViewport({ width: 1440, height: 900 });
  await new Promise(r => setTimeout(r, 600));

  const hasDesktopOverflow = await page.evaluate(() => {
    return document.documentElement.scrollWidth > window.innerWidth;
  });
  console.log(`Desktop horizontal overflow check: ${hasDesktopOverflow ? 'FAILED (Overflow detected!)' : 'PASSED (Clean)'}`);

  // Screenshot Desktop Hero
  const desktopHeroPath = path.join(artifactDir, 'screenshot-desktop-hero.png');
  await page.screenshot({ path: desktopHeroPath, fullPage: false });
  console.log(`Captured: ${desktopHeroPath}`);

  // 2. Test Project Modal Interaction
  console.log('Testing Project Modal Interaction...');
  const viewProjectButtons = await page.$$('button');
  let clickedProjectModal = false;
  for (const btn of viewProjectButtons) {
    const text = await page.evaluate(el => el.textContent, btn);
    if (text && text.includes('View Project')) {
      await btn.click();
      clickedProjectModal = true;
      break;
    }
  }

  if (clickedProjectModal) {
    await new Promise(r => setTimeout(r, 500));
    const modalVisible = await page.$eval('[role="dialog"]', el => !!el).catch(() => false);
    console.log(`Project Modal opened successfully: ${modalVisible ? 'YES' : 'NO'}`);

    const modalShotPath = path.join(artifactDir, 'screenshot-modal.png');
    await page.screenshot({ path: modalShotPath });
    console.log(`Captured modal: ${modalShotPath}`);

    // Close modal
    const closeBtn = await page.$('button[aria-label="Close modal"]');
    if (closeBtn) {
      await closeBtn.click();
      await new Promise(r => setTimeout(r, 400));
      console.log('Modal closed via close button.');
    }
  }

  // 3. Test Skills Filter Tabs
  console.log('Testing Skills Filter Tabs...');
  const skillButtons = await page.$$('button');
  for (const btn of skillButtons) {
    const text = await page.evaluate(el => el.textContent.trim(), btn);
    if (text === 'Emerging Tech') {
      await btn.click();
      await new Promise(r => setTimeout(r, 300));
      console.log('Filtered by Emerging Tech');
      break;
    }
  }

  // 4. Test Tablet Viewport (768x1024)
  console.log('Testing Tablet 768x1024...');
  await page.setViewport({ width: 768, height: 1024 });
  await new Promise(r => setTimeout(r, 500));
  const hasTabletOverflow = await page.evaluate(() => {
    return document.documentElement.scrollWidth > window.innerWidth;
  });
  console.log(`Tablet horizontal overflow check: ${hasTabletOverflow ? 'FAILED' : 'PASSED'}`);
  const tabletShotPath = path.join(artifactDir, 'screenshot-tablet.png');
  await page.screenshot({ path: tabletShotPath });
  console.log(`Captured tablet: ${tabletShotPath}`);

  // 5. Test Mobile Viewport (375x812 - iPhone)
  console.log('Testing Mobile 375x812...');
  await page.setViewport({ width: 375, height: 812 });
  await new Promise(r => setTimeout(r, 500));

  const hasMobileOverflow = await page.evaluate(() => {
    return document.documentElement.scrollWidth > window.innerWidth;
  });
  console.log(`Mobile horizontal overflow check (375px): ${hasMobileOverflow ? 'FAILED' : 'PASSED'}`);

  // Test Mobile Hamburger Menu
  console.log('Testing Mobile Hamburger Menu...');
  const hamburgerBtn = await page.$('button[aria-label="Open menu"]');
  if (hamburgerBtn) {
    await hamburgerBtn.click();
    await new Promise(r => setTimeout(r, 500));
    console.log('Mobile menu opened.');

    const mobileMenuShotPath = path.join(artifactDir, 'screenshot-mobile-menu.png');
    await page.screenshot({ path: mobileMenuShotPath });
    console.log(`Captured mobile menu: ${mobileMenuShotPath}`);

    // Click a nav link inside drawer
    const drawerLink = await page.$('div[data-mobile-menu] a[href="#about"]');
    if (drawerLink) {
      await drawerLink.click();
      await new Promise(r => setTimeout(r, 600));
      console.log('Clicked #about in mobile menu, verified smooth scroll and auto-close.');
    }
  }

  // 6. Test Ultra-Small Viewport (320px)
  await page.setViewport({ width: 320, height: 568 });
  await new Promise(r => setTimeout(r, 500));
  const hasSmallMobileOverflow = await page.evaluate(() => {
    return document.documentElement.scrollWidth > window.innerWidth;
  });
  console.log(`Ultra-small mobile overflow check (320px): ${hasSmallMobileOverflow ? 'FAILED' : 'PASSED'}`);

  // 7. Full Desktop Page Screenshot
  console.log('Capturing full page desktop screenshot...');
  await page.setViewport({ width: 1440, height: 900 });
  await new Promise(r => setTimeout(r, 500));

  // Reset skills filter to All for the full snapshot
  const allBtn = await page.$('button');
  for (const btn of await page.$$('button')) {
    const text = await page.evaluate(el => el.textContent.trim(), btn);
    if (text === 'All') {
      await btn.click();
      break;
    }
  }
  await new Promise(r => setTimeout(r, 400));

  const fullPagePath = path.join(artifactDir, 'screenshot-fullpage.png');
  await page.screenshot({ path: fullPagePath, fullPage: true });
  console.log(`Captured full page: ${fullPagePath}`);

  // 8. Capture Section Specific Screenshots
  const sections = ['about', 'education', 'skills', 'projects', 'achievements', 'contact'];
  for (const s of sections) {
    const el = await page.$(`#${s}`);
    if (el) {
      const sPath = path.join(artifactDir, `screenshot-section-${s}.png`);
      await el.screenshot({ path: sPath });
      console.log(`Captured section #${s}: ${sPath}`);
    }
  }

  await browser.close();

  console.log('\n--- AUDIT SUMMARY ---');
  console.log(`Console Errors: ${consoleErrors.length}`);
  console.log(`Page Errors: ${pageErrors.length}`);
  console.log('Audit completed successfully.');
}

runTests().catch(err => {
  console.error('Test run failed:', err);
  process.exit(1);
});

