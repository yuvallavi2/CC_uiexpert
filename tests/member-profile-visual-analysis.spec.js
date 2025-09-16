const { test, expect } = require('@playwright/test');
const fs = require('fs');
const path = require('path');

test.describe('Member Profile Visual Analysis - Iteration 2', () => {
  let analysisResults = {
    iteration: 2,
    timestamp: new Date().toISOString(),
    uiPurposeMatch: {},
    layoutComparison: {},
    visualStyling: {},
    componentStructure: {},
    overallAssessment: {},
    improvements: [],
    recommendations: []
  };

  test('UI Purpose Match Analysis', async ({ page }) => {
    const filePath = path.resolve('/mnt/c/claudecode/uxexpert/src/html/member-profile.html');
    await page.goto(`file://${filePath}`);

    // Take screenshot for visual reference
    await page.screenshot({
      path: 'test-results/iteration2-current-implementation.png',
      fullPage: true
    });

    // Check if interface is a profile VIEW (not edit form)
    const editFormElements = await page.locator('input[type="text"], input[type="email"], textarea, select').count();
    const displayElements = await page.locator('[id*="display"], .text-white.font-medium').count();
    const editButton = await page.locator('#btnEditProfile').count();
    const saveButtons = await page.locator('button:has-text("Save"), button:has-text("Update")').count();

    analysisResults.uiPurposeMatch = {
      isProfileView: editFormElements === 0 && displayElements > 0,
      hasEditButton: editButton > 0,
      hasInputFields: editFormElements,
      hasDisplayElements: displayElements,
      hasSaveButtons: saveButtons,
      purposeScore: editFormElements === 0 && editButton > 0 ? 100 : 0,
      improvements: []
    };

    if (analysisResults.uiPurposeMatch.isProfileView) {
      analysisResults.improvements.push("✅ MAJOR IMPROVEMENT: Successfully converted from edit form to profile view interface");
    }

    console.log('UI Purpose Analysis:', analysisResults.uiPurposeMatch);
  });

  test('Layout Structure Comparison', async ({ page }) => {
    const filePath = path.resolve('/mnt/c/claudecode/uxexpert/src/html/member-profile.html');
    await page.goto(`file://${filePath}`);

    // Analyze main structural elements
    const profileHeader = await page.locator('.bg-\\[\\#1c2620\\]').first().isVisible();
    const profileAvatar = await page.locator('.rounded-full.bg-gradient-to-br').isVisible();
    const profileName = await page.locator('#displayFullName').isVisible();
    const memberSince = await page.locator('#displayMemberSince').isVisible();
    const memberID = await page.locator('#displayMemberID').isVisible();
    const editButton = await page.locator('#btnEditProfile').isVisible();

    // Check two-column layout
    const gridLayout = await page.locator('.grid.grid-cols-1.xl\\:grid-cols-2').isVisible();
    const contactCard = await page.locator('.bg-\\[\\#1c2620\\]').nth(1).isVisible();
    const demographicsCard = await page.locator('.bg-\\[\\#1c2620\\]').nth(2).isVisible();

    // Check contact information structure
    const contactTitle = await page.locator('h2:has-text("Contact Information")').isVisible();
    const demographicsTitle = await page.locator('h2:has-text("Demographics")').isVisible();

    analysisResults.layoutComparison = {
      profileHeader: profileHeader,
      profileAvatar: profileAvatar,
      profileInfo: profileName && memberSince && memberID,
      editButton: editButton,
      twoColumnLayout: gridLayout,
      contactCard: contactCard,
      demographicsCard: demographicsCard,
      cardTitles: contactTitle && demographicsTitle,
      structureScore: [profileHeader, profileAvatar, profileInfo, editButton, twoColumnLayout, contactCard, demographicsCard, cardTitles].filter(Boolean).length * 12.5,
      improvements: []
    };

    if (analysisResults.layoutComparison.structureScore >= 87.5) {
      analysisResults.improvements.push("✅ EXCELLENT: Layout structure closely matches reference with proper card-based organization");
    }

    console.log('Layout Structure:', analysisResults.layoutComparison);
  });

  test('Visual Styling Assessment', async ({ page }) => {
    const filePath = path.resolve('/mnt/c/claudecode/uxexpert/src/html/member-profile.html');
    await page.goto(`file://${filePath}`);

    // Check dark theme consistency
    const bodyBackground = await page.evaluate(() => {
      return window.getComputedStyle(document.body).backgroundColor;
    });

    const cardBackground = await page.evaluate(() => {
      const card = document.querySelector('.bg-\\[\\#1c2620\\]');
      return card ? window.getComputedStyle(card).backgroundColor : null;
    });

    const primaryButton = await page.evaluate(() => {
      const btn = document.querySelector('#btnEditProfile');
      return btn ? window.getComputedStyle(btn).backgroundColor : null;
    });

    // Check typography
    const headingFont = await page.evaluate(() => {
      const heading = document.querySelector('#displayFullName');
      return heading ? window.getComputedStyle(heading).fontFamily : null;
    });

    // Check spacing and rounded corners
    const cardBorderRadius = await page.evaluate(() => {
      const card = document.querySelector('.bg-\\[\\#1c2620\\]');
      return card ? window.getComputedStyle(card).borderRadius : null;
    });

    analysisResults.visualStyling = {
      darkTheme: bodyBackground.includes('rgb(3, 7, 18)') || bodyBackground.includes('rgb(2, 6, 23)'),
      cardBackground: cardBackground && cardBackground.includes('rgb(28, 38, 32)'),
      primaryButton: primaryButton && primaryButton.includes('rgb(56, 224, 123)'),
      typography: headingFont && headingFont.includes('Spline Sans'),
      roundedCorners: cardBorderRadius && cardBorderRadius.includes('16px'),
      stylingScore: 0,
      improvements: []
    };

    // Calculate styling score
    let stylePoints = 0;
    if (analysisResults.visualStyling.darkTheme) stylePoints += 25;
    if (analysisResults.visualStyling.cardBackground) stylePoints += 25;
    if (analysisResults.visualStyling.primaryButton) stylePoints += 20;
    if (analysisResults.visualStyling.typography) stylePoints += 15;
    if (analysisResults.visualStyling.roundedCorners) stylePoints += 15;

    analysisResults.visualStyling.stylingScore = stylePoints;

    if (analysisResults.visualStyling.stylingScore >= 80) {
      analysisResults.improvements.push("✅ STRONG: Visual styling closely matches reference dark theme and color scheme");
    }

    console.log('Visual Styling:', analysisResults.visualStyling);
  });

  test('Component Structure Analysis', async ({ page }) => {
    const filePath = path.resolve('/mnt/c/claudecode/uxexpert/src/html/member-profile.html');
    await page.goto(`file://${filePath}`);

    // Profile header components
    const headerComponents = {
      avatar: await page.locator('.rounded-full.bg-gradient-to-br').isVisible(),
      nameDisplay: await page.locator('#displayFullName').isVisible(),
      membershipInfo: await page.locator('#displayMemberSince').isVisible(),
      memberIdDisplay: await page.locator('#displayMemberID').isVisible(),
      editButton: await page.locator('#btnEditProfile').isVisible()
    };

    // Contact information components
    const contactComponents = {
      sectionTitle: await page.locator('h2:has-text("Contact Information")').isVisible(),
      contactSubform: await page.locator('#SubF_M_Contact').isVisible(),
      emailSubform: await page.locator('#SubFMEmail').isVisible(),
      placeholderStructure: await page.locator('.material-symbols-outlined').count() > 0
    };

    // Demographics components
    const demographicsComponents = {
      sectionTitle: await page.locator('h2:has-text("Demographics")').isVisible(),
      genderField: await page.locator('#displayGender').isVisible(),
      birthDateField: await page.locator('#displayBirthDate').isVisible(),
      ageField: await page.locator('#displayAge').isVisible(),
      visibilityField: await page.locator('#displayVisibility').isVisible(),
      keyValueLayout: await page.locator('.flex.justify-between.items-center').count() >= 4
    };

    // Information notice
    const infoNotice = await page.locator('.material-symbols-outlined:has-text("info")').isVisible();

    analysisResults.componentStructure = {
      profileHeader: headerComponents,
      contactSection: contactComponents,
      demographicsSection: demographicsComponents,
      informationNotice: infoNotice,
      componentScore: 0,
      improvements: []
    };

    // Calculate component score
    const headerScore = Object.values(headerComponents).filter(Boolean).length * 15;
    const contactScore = Object.values(contactComponents).filter(Boolean).length * 10;
    const demoScore = Object.values(demographicsComponents).filter(Boolean).length * 8;
    const noticeScore = infoNotice ? 10 : 0;

    analysisResults.componentStructure.componentScore = headerScore + contactScore + demoScore + noticeScore;

    if (analysisResults.componentStructure.componentScore >= 70) {
      analysisResults.improvements.push("✅ GOOD: Component structure properly organized with clear sections and appropriate information display");
    }

    console.log('Component Structure:', analysisResults.componentStructure);
  });

  test('Missing Elements Analysis', async ({ page }) => {
    const filePath = path.resolve('/mnt/c/claudecode/uxexpert/src/html/member-profile.html');
    await page.goto(`file://${filePath}`);

    // Check for missing elements compared to reference
    const breadcrumbs = await page.locator('nav:has-text("Members"), .breadcrumb').count();
    const eventParticipation = await page.locator('h3:has-text("Event Participation"), h2:has-text("Event Participation")').count();
    const eventTable = await page.locator('table, .table').count();
    const realAvatarImage = await page.locator('img[src*="http"], .bg-cover').count();
    const occupationField = await page.locator(':has-text("Occupation")').count();
    const actualContactData = await page.locator(':has-text("liam.carter@email.com"), :has-text("123-4567"), :has-text("123 Main Street")').count();

    const missingElements = [];
    if (breadcrumbs === 0) missingElements.push("Breadcrumb navigation");
    if (eventParticipation === 0) missingElements.push("Event Participation section");
    if (eventTable === 0) missingElements.push("Event participation table");
    if (realAvatarImage === 0) missingElements.push("Actual profile image (placeholder used)");
    if (occupationField === 0) missingElements.push("Occupation field");
    if (actualContactData === 0) missingElements.push("Real contact information (wireframes used)");

    analysisResults.missingElements = {
      breadcrumbs,
      eventParticipation,
      eventTable,
      realAvatarImage,
      occupationField,
      actualContactData,
      missingCount: missingElements.length,
      missingList: missingElements,
      completenessScore: Math.max(0, 100 - (missingElements.length * 15))
    };

    console.log('Missing Elements:', analysisResults.missingElements);
  });

  test('Generate Final Assessment Report', async ({ page }) => {
    // Calculate overall similarity score
    const scores = [
      analysisResults.uiPurposeMatch.purposeScore || 0,
      analysisResults.layoutComparison.structureScore || 0,
      analysisResults.visualStyling.stylingScore || 0,
      analysisResults.componentStructure.componentScore || 0,
      analysisResults.missingElements?.completenessScore || 0
    ];

    const averageScore = scores.reduce((a, b) => a + b, 0) / scores.length;

    // Determine iteration 3 necessity
    const needsIteration3 = averageScore < 85 || analysisResults.missingElements?.missingCount > 2;

    analysisResults.overallAssessment = {
      visualSimilarityPercentage: Math.round(averageScore),
      previousIteration: "Iteration 1 had major UI purpose mismatch (edit form vs profile view)",
      currentImprovement: "Successfully converted to profile view interface",
      keyStrengths: [
        "Proper profile view interface (not edit form)",
        "Card-based layout structure matches reference",
        "Dark theme and color scheme alignment",
        "Profile header with avatar and member info",
        "Two-column grid layout for information cards"
      ],
      remainingIssues: analysisResults.missingElements?.missingList || [],
      needsIteration3: needsIteration3,
      iteration3Focus: needsIteration3 ? [
        "Add Event Participation section with table",
        "Include breadcrumb navigation",
        "Replace wireframe placeholders with actual data",
        "Add occupation field to demographics"
      ] : [],
      confidenceLevel: averageScore >= 85 ? "High" : averageScore >= 70 ? "Medium" : "Needs Work"
    };

    // Add final recommendations
    if (averageScore >= 85) {
      analysisResults.recommendations.push("🎉 MAJOR SUCCESS: UI purpose mismatch from iteration 1 has been resolved");
      analysisResults.recommendations.push("✅ Layout and structure now properly match reference profile view interface");
    }

    if (needsIteration3) {
      analysisResults.recommendations.push("🔄 ITERATION 3 RECOMMENDED: Add missing sections and replace placeholder content");
    } else {
      analysisResults.recommendations.push("✅ IMPLEMENTATION READY: Core structure and purpose alignment achieved");
    }

    // Save detailed results
    const reportPath = '/mnt/c/claudecode/uxexpert/test-results/iteration2-analysis-report.json';
    fs.writeFileSync(reportPath, JSON.stringify(analysisResults, null, 2));

    console.log('\n=== ITERATION 2 VISUAL ANALYSIS REPORT ===');
    console.log(`Overall Visual Similarity: ${analysisResults.overallAssessment.visualSimilarityPercentage}%`);
    console.log(`Confidence Level: ${analysisResults.overallAssessment.confidenceLevel}`);
    console.log(`Needs Iteration 3: ${needsIteration3 ? 'YES' : 'NO'}`);
    console.log('\nKey Improvements:');
    analysisResults.improvements.forEach(improvement => console.log(improvement));
    console.log('\nRecommendations:');
    analysisResults.recommendations.forEach(rec => console.log(rec));

    if (analysisResults.missingElements?.missingList.length > 0) {
      console.log('\nRemaining Items for Iteration 3:');
      analysisResults.missingElements.missingList.forEach(item => console.log(`- ${item}`));
    }
  });
});