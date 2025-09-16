const { test, expect } = require('@playwright/test');
const path = require('path');
const fs = require('fs');

test.describe('Member Profile Visual Comparison', () => {
  const generatedHtmlPath = path.resolve(__dirname, '../src/html/member-profile.html');
  const referenceImagePath = path.resolve(__dirname, '../docs/UX/samples/member_profile/screen.png');
  const referenceHtmlPath = path.resolve(__dirname, '../docs/UX/samples/member_profile/code.html');

  test.beforeAll(async () => {
    // Ensure all files exist
    if (!fs.existsSync(generatedHtmlPath)) {
      throw new Error(`Generated HTML file not found: ${generatedHtmlPath}`);
    }
    if (!fs.existsSync(referenceImagePath)) {
      throw new Error(`Reference image not found: ${referenceImagePath}`);
    }
    if (!fs.existsSync(referenceHtmlPath)) {
      throw new Error(`Reference HTML not found: ${referenceHtmlPath}`);
    }
  });

  test('should capture screenshot of generated member-profile.html', async ({ page, browserName }) => {
    // Navigate to the generated HTML file
    await page.goto(`file://${generatedHtmlPath}`);

    // Wait for fonts and styles to load
    await page.waitForLoadState('networkidle');
    await page.waitForTimeout(2000); // Additional wait for font rendering

    // Take full page screenshot
    const screenshotPath = `test-results/generated-member-profile-${browserName}.png`;
    await page.screenshot({
      path: screenshotPath,
      fullPage: true,
      animations: 'disabled'
    });

    console.log(`Screenshot saved: ${screenshotPath}`);
  });

  test('should capture screenshot of reference HTML', async ({ page, browserName }) => {
    // Navigate to the reference HTML file
    await page.goto(`file://${referenceHtmlPath}`);

    // Wait for fonts and styles to load
    await page.waitForLoadState('networkidle');
    await page.waitForTimeout(2000); // Additional wait for font rendering

    // Take full page screenshot
    const screenshotPath = `test-results/reference-member-profile-${browserName}.png`;
    await page.screenshot({
      path: screenshotPath,
      fullPage: true,
      animations: 'disabled'
    });

    console.log(`Screenshot saved: ${screenshotPath}`);
  });

  test('should analyze form structure and elements - Generated HTML', async ({ page }) => {
    await page.goto(`file://${generatedHtmlPath}`);
    await page.waitForLoadState('networkidle');

    // Check basic structure
    const title = await page.title();
    expect(title).toBe('Member Profile');

    // Check main container
    const mainContainer = await page.locator('.min-h-screen').first();
    await expect(mainContainer).toBeVisible();

    // Check form elements
    const form = await page.locator('#memberProfileForm');
    await expect(form).toBeVisible();

    // Check required fields
    const titleField = await page.locator('#Combo_Title');
    const firstNameField = await page.locator('#First_Name');
    const lastNameField = await page.locator('#Last_Name');
    const birthDateField = await page.locator('#Birth_Date');
    const genderField = await page.locator('#Combo_Gender');

    await expect(titleField).toBeVisible();
    await expect(firstNameField).toBeVisible();
    await expect(lastNameField).toBeVisible();
    await expect(birthDateField).toBeVisible();
    await expect(genderField).toBeVisible();

    // Check buttons
    const saveButton = await page.locator('#btnSave');
    const quitButton = await page.locator('#btnQuit');

    await expect(saveButton).toBeVisible();
    await expect(quitButton).toBeVisible();

    // Check subform placeholders
    const contactSubform = await page.locator('#SubF_M_Contact');
    const emailSubform = await page.locator('#SubFMEmail');

    await expect(contactSubform).toBeVisible();
    await expect(emailSubform).toBeVisible();

    console.log('Generated HTML structure analysis complete');
  });

  test('should analyze form structure and elements - Reference HTML', async ({ page }) => {
    await page.goto(`file://${referenceHtmlPath}`);
    await page.waitForLoadState('networkidle');

    // Check if this is a profile view (not edit form)
    const isProfileView = await page.locator('h2:has-text("Yuval Lavi")').isVisible();

    if (isProfileView) {
      console.log('Reference HTML is a profile VIEW page, not an edit FORM');

      // Check profile elements
      const profileName = await page.locator('h2:has-text("Yuval Lavi")');
      await expect(profileName).toBeVisible();

      // Check sections
      const contactSection = await page.locator('h3:has-text("Contact Information")');
      const demographicsSection = await page.locator('h3:has-text("Demographics")');
      const eventsSection = await page.locator('h3:has-text("Event Participation")');

      await expect(contactSection).toBeVisible();
      await expect(demographicsSection).toBeVisible();
      await expect(eventsSection).toBeVisible();

      // Check sidebar navigation
      const sidebar = await page.locator('aside');
      await expect(sidebar).toBeVisible();

      const membersNav = await page.locator('nav a:has-text("Members")');
      await expect(membersNav).toBeVisible();
    }

    console.log('Reference HTML structure analysis complete');
  });

  test('should measure layout dimensions and spacing - Generated HTML', async ({ page }) => {
    await page.goto(`file://${generatedHtmlPath}`);
    await page.waitForLoadState('networkidle');

    // Get viewport dimensions
    const viewport = page.viewportSize();

    // Measure main container
    const mainContainer = await page.locator('.min-h-screen').first();
    const containerBox = await mainContainer.boundingBox();

    // Measure form container
    const formContainer = await page.locator('.bg-\\[\\#1c2620\\]');
    const formBox = await formContainer.boundingBox();

    // Measure grid layout
    const gridContainer = await page.locator('.grid.grid-cols-1.gap-6.md\\:grid-cols-2.lg\\:grid-cols-3').first();
    const gridBox = await gridContainer.boundingBox();

    const measurements = {
      viewport,
      container: containerBox,
      form: formBox,
      grid: gridBox
    };

    console.log('Generated HTML measurements:', JSON.stringify(measurements, null, 2));
  });

  test('should extract color scheme and styling - Generated HTML', async ({ page }) => {
    await page.goto(`file://${generatedHtmlPath}`);
    await page.waitForLoadState('networkidle');

    // Get body background color
    const bodyBg = await page.evaluate(() => {
      return window.getComputedStyle(document.body).backgroundColor;
    });

    // Get form container background
    const formBg = await page.evaluate(() => {
      const formContainer = document.querySelector('.bg-\\[\\#1c2620\\]');
      return formContainer ? window.getComputedStyle(formContainer).backgroundColor : null;
    });

    // Get input field styles
    const inputStyles = await page.evaluate(() => {
      const input = document.querySelector('input[type="text"]');
      if (!input) return null;
      const styles = window.getComputedStyle(input);
      return {
        backgroundColor: styles.backgroundColor,
        borderColor: styles.borderColor,
        color: styles.color
      };
    });

    // Get button styles
    const buttonStyles = await page.evaluate(() => {
      const saveBtn = document.querySelector('#btnSave');
      if (!saveBtn) return null;
      const styles = window.getComputedStyle(saveBtn);
      return {
        backgroundColor: styles.backgroundColor,
        color: styles.color
      };
    });

    const colorScheme = {
      body: bodyBg,
      form: formBg,
      input: inputStyles,
      button: buttonStyles
    };

    console.log('Generated HTML color scheme:', JSON.stringify(colorScheme, null, 2));
  });

  test('should check responsive behavior - Generated HTML', async ({ page }) => {
    await page.goto(`file://${generatedHtmlPath}`);
    await page.waitForLoadState('networkidle');

    // Test desktop view (1920x1080)
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.waitForTimeout(500);
    const desktopScreenshot = `test-results/generated-desktop-1920x1080.png`;
    await page.screenshot({ path: desktopScreenshot, fullPage: true });

    // Test tablet view (768x1024)
    await page.setViewportSize({ width: 768, height: 1024 });
    await page.waitForTimeout(500);
    const tabletScreenshot = `test-results/generated-tablet-768x1024.png`;
    await page.screenshot({ path: tabletScreenshot, fullPage: true });

    // Test mobile view (375x667)
    await page.setViewportSize({ width: 375, height: 667 });
    await page.waitForTimeout(500);
    const mobileScreenshot = `test-results/generated-mobile-375x667.png`;
    await page.screenshot({ path: mobileScreenshot, fullPage: true });

    console.log('Responsive screenshots captured');
  });
});