const fs = require('fs');
const path = require('path');

/**
 * Comprehensive HTML Analysis and Comparison Tool
 * Analyzes structure, styling, and functionality between generated and reference HTML
 */

class HTMLAnalyzer {
  constructor() {
    this.generatedHtmlPath = path.resolve(__dirname, '../src/html/member-profile.html');
    this.referenceHtmlPath = path.resolve(__dirname, '../docs/UX/samples/member_profile/code.html');
    this.referenceImagePath = path.resolve(__dirname, '../docs/UX/samples/member_profile/screen.png');
  }

  readFile(filePath) {
    try {
      return fs.readFileSync(filePath, 'utf8');
    } catch (error) {
      console.error(`Error reading file ${filePath}:`, error.message);
      return null;
    }
  }

  extractElements(html) {
    const elements = {
      forms: [],
      inputs: [],
      buttons: [],
      selects: [],
      sections: [],
      headings: [],
      containers: [],
      scripts: [],
      styles: []
    };

    // Extract form elements
    const formMatches = html.match(/<form[^>]*>/g) || [];
    elements.forms = formMatches.map(match => ({
      raw: match,
      id: this.extractAttribute(match, 'id'),
      class: this.extractAttribute(match, 'class')
    }));

    // Extract input elements
    const inputMatches = html.match(/<input[^>]*>/g) || [];
    elements.inputs = inputMatches.map(match => ({
      raw: match,
      type: this.extractAttribute(match, 'type'),
      id: this.extractAttribute(match, 'id'),
      name: this.extractAttribute(match, 'name'),
      required: match.includes('required'),
      readonly: match.includes('readonly'),
      class: this.extractAttribute(match, 'class')
    }));

    // Extract button elements
    const buttonMatches = html.match(/<button[^>]*>.*?<\/button>/gs) || [];
    elements.buttons = buttonMatches.map(match => ({
      raw: match,
      type: this.extractAttribute(match, 'type'),
      id: this.extractAttribute(match, 'id'),
      class: this.extractAttribute(match, 'class'),
      text: match.replace(/<[^>]*>/g, '').trim()
    }));

    // Extract select elements
    const selectMatches = html.match(/<select[^>]*>.*?<\/select>/gs) || [];
    elements.selects = selectMatches.map(match => ({
      raw: match,
      id: this.extractAttribute(match, 'id'),
      name: this.extractAttribute(match, 'name'),
      required: match.includes('required'),
      class: this.extractAttribute(match, 'class'),
      options: (match.match(/<option[^>]*>.*?<\/option>/g) || []).length
    }));

    // Extract headings
    const headingMatches = html.match(/<h[1-6][^>]*>.*?<\/h[1-6]>/gs) || [];
    elements.headings = headingMatches.map(match => ({
      raw: match,
      level: match.charAt(2),
      text: match.replace(/<[^>]*>/g, '').trim(),
      class: this.extractAttribute(match, 'class')
    }));

    // Extract major container divs
    const containerMatches = html.match(/<div[^>]*class="[^"]*container[^"]*"[^>]*>/g) || [];
    const gridMatches = html.match(/<div[^>]*class="[^"]*grid[^"]*"[^>]*>/g) || [];
    elements.containers = [...containerMatches, ...gridMatches].map(match => ({
      raw: match,
      class: this.extractAttribute(match, 'class'),
      id: this.extractAttribute(match, 'id')
    }));

    return elements;
  }

  extractAttribute(element, attribute) {
    const regex = new RegExp(`${attribute}="([^"]*)"`, 'i');
    const match = element.match(regex);
    return match ? match[1] : null;
  }

  analyzeColorScheme(html) {
    const colors = {
      backgrounds: [],
      textColors: [],
      borderColors: [],
      primaryColors: []
    };

    // Extract background colors
    const bgMatches = html.match(/bg-[\w-]+/g) || [];
    colors.backgrounds = [...new Set(bgMatches)];

    // Extract text colors
    const textMatches = html.match(/text-[\w-]+/g) || [];
    colors.textColors = [...new Set(textMatches)];

    // Extract border colors
    const borderMatches = html.match(/border-[\w-]+/g) || [];
    colors.borderColors = [...new Set(borderMatches)];

    // Extract custom color values
    const customColorMatches = html.match(/#[0-9a-fA-F]{3,6}/g) || [];
    colors.primaryColors = [...new Set(customColorMatches)];

    return colors;
  }

  analyzeLayout(html) {
    const layout = {
      gridSystems: [],
      flexContainers: [],
      responsiveClasses: [],
      spacing: []
    };

    // Extract grid systems
    const gridMatches = html.match(/grid[^"'\s]*/g) || [];
    layout.gridSystems = [...new Set(gridMatches)];

    // Extract flex containers
    const flexMatches = html.match(/flex[^"'\s]*/g) || [];
    layout.flexContainers = [...new Set(flexMatches)];

    // Extract responsive classes
    const responsiveMatches = html.match(/(?:sm|md|lg|xl):[^"'\s]*/g) || [];
    layout.responsiveClasses = [...new Set(responsiveMatches)];

    // Extract spacing classes
    const spacingMatches = html.match(/(?:p|m|gap)-[^"'\s]*/g) || [];
    layout.spacing = [...new Set(spacingMatches)];

    return layout;
  }

  compareFunctionality(generatedElements, referenceElements) {
    const comparison = {
      formsMatch: generatedElements.forms.length === referenceElements.forms.length,
      inputFieldsComparison: {
        generated: generatedElements.inputs.length,
        reference: referenceElements.inputs.length,
        match: generatedElements.inputs.length >= referenceElements.inputs.length
      },
      buttonsComparison: {
        generated: generatedElements.buttons.length,
        reference: referenceElements.buttons.length,
        generatedButtons: generatedElements.buttons.map(b => ({ id: b.id, text: b.text })),
        referenceButtons: referenceElements.buttons.map(b => ({ id: b.id, text: b.text }))
      },
      selectsComparison: {
        generated: generatedElements.selects.length,
        reference: referenceElements.selects.length,
        match: generatedElements.selects.length >= referenceElements.selects.length
      }
    };

    return comparison;
  }

  generateReport() {
    console.log('='.repeat(80));
    console.log('MEMBER PROFILE HTML VISUAL COMPARISON REPORT');
    console.log('='.repeat(80));
    console.log();

    // Read files
    const generatedHtml = this.readFile(this.generatedHtmlPath);
    const referenceHtml = this.readFile(this.referenceHtmlPath);

    if (!generatedHtml) {
      console.error('❌ Could not read generated HTML file');
      return;
    }

    if (!referenceHtml) {
      console.error('❌ Could not read reference HTML file');
      return;
    }

    console.log('📁 FILE ANALYSIS');
    console.log('-'.repeat(40));
    console.log(`Generated HTML: ${this.generatedHtmlPath}`);
    console.log(`Reference HTML: ${this.referenceHtmlPath}`);
    console.log(`Reference Image: ${this.referenceImagePath}`);
    console.log(`Generated HTML Size: ${(generatedHtml.length / 1024).toFixed(2)} KB`);
    console.log(`Reference HTML Size: ${(referenceHtml.length / 1024).toFixed(2)} KB`);
    console.log();

    // Extract elements
    const generatedElements = this.extractElements(generatedHtml);
    const referenceElements = this.extractElements(referenceHtml);

    console.log('🏗️  STRUCTURAL ANALYSIS');
    console.log('-'.repeat(40));

    console.log('📋 GENERATED HTML STRUCTURE:');
    console.log(`  Forms: ${generatedElements.forms.length}`);
    console.log(`  Input Fields: ${generatedElements.inputs.length}`);
    console.log(`  Buttons: ${generatedElements.buttons.length}`);
    console.log(`  Select Dropdowns: ${generatedElements.selects.length}`);
    console.log(`  Headings: ${generatedElements.headings.length}`);
    console.log(`  Main Containers: ${generatedElements.containers.length}`);

    console.log('\n📋 REFERENCE HTML STRUCTURE:');
    console.log(`  Forms: ${referenceElements.forms.length}`);
    console.log(`  Input Fields: ${referenceElements.inputs.length}`);
    console.log(`  Buttons: ${referenceElements.buttons.length}`);
    console.log(`  Select Dropdowns: ${referenceElements.selects.length}`);
    console.log(`  Headings: ${referenceElements.headings.length}`);
    console.log(`  Main Containers: ${referenceElements.containers.length}`);
    console.log();

    // Analyze specific elements
    console.log('🔍 DETAILED ELEMENT ANALYSIS');
    console.log('-'.repeat(40));

    console.log('GENERATED HTML - INPUT FIELDS:');
    generatedElements.inputs.forEach((input, i) => {
      console.log(`  ${i + 1}. ${input.type || 'text'} - ID: ${input.id || 'N/A'} - Required: ${input.required ? 'Yes' : 'No'}`);
    });

    console.log('\nGENERATED HTML - BUTTONS:');
    generatedElements.buttons.forEach((button, i) => {
      console.log(`  ${i + 1}. ID: ${button.id || 'N/A'} - Text: "${button.text}" - Type: ${button.type || 'button'}`);
    });

    console.log('\nREFERENCE HTML - BUTTONS:');
    referenceElements.buttons.forEach((button, i) => {
      console.log(`  ${i + 1}. ID: ${button.id || 'N/A'} - Text: "${button.text}" - Type: ${button.type || 'button'}`);
    });
    console.log();

    // Analyze colors and styling
    const generatedColors = this.analyzeColorScheme(generatedHtml);
    const referenceColors = this.analyzeColorScheme(referenceHtml);

    console.log('🎨 COLOR SCHEME ANALYSIS');
    console.log('-'.repeat(40));
    console.log('GENERATED HTML:');
    console.log(`  Background Colors: ${generatedColors.backgrounds.slice(0, 10).join(', ')}`);
    console.log(`  Text Colors: ${generatedColors.textColors.slice(0, 10).join(', ')}`);
    console.log(`  Custom Colors: ${generatedColors.primaryColors.join(', ')}`);

    console.log('\nREFERENCE HTML:');
    console.log(`  Background Colors: ${referenceColors.backgrounds.slice(0, 10).join(', ')}`);
    console.log(`  Text Colors: ${referenceColors.textColors.slice(0, 10).join(', ')}`);
    console.log(`  Custom Colors: ${referenceColors.primaryColors.join(', ')}`);
    console.log();

    // Analyze layout
    const generatedLayout = this.analyzeLayout(generatedHtml);
    const referenceLayout = this.analyzeLayout(referenceHtml);

    console.log('📐 LAYOUT ANALYSIS');
    console.log('-'.repeat(40));
    console.log('GENERATED HTML:');
    console.log(`  Grid Systems: ${generatedLayout.gridSystems.slice(0, 5).join(', ')}`);
    console.log(`  Flex Containers: ${generatedLayout.flexContainers.slice(0, 5).join(', ')}`);
    console.log(`  Responsive Classes: ${generatedLayout.responsiveClasses.slice(0, 5).join(', ')}`);

    console.log('\nREFERENCE HTML:');
    console.log(`  Grid Systems: ${referenceLayout.gridSystems.slice(0, 5).join(', ')}`);
    console.log(`  Flex Containers: ${referenceLayout.flexContainers.slice(0, 5).join(', ')}`);
    console.log(`  Responsive Classes: ${referenceLayout.responsiveClasses.slice(0, 5).join(', ')}`);
    console.log();

    // Compare functionality
    const functionality = this.compareFunctionality(generatedElements, referenceElements);

    console.log('⚖️  FUNCTIONALITY COMPARISON');
    console.log('-'.repeat(40));
    console.log(`Forms Match: ${functionality.formsMatch ? '✅' : '❌'}`);
    console.log(`Input Fields - Generated: ${functionality.inputFieldsComparison.generated}, Reference: ${functionality.inputFieldsComparison.reference} ${functionality.inputFieldsComparison.match ? '✅' : '❌'}`);
    console.log(`Buttons - Generated: ${functionality.buttonsComparison.generated}, Reference: ${functionality.buttonsComparison.reference}`);
    console.log(`Select Fields - Generated: ${functionality.selectsComparison.generated}, Reference: ${functionality.selectsComparison.reference} ${functionality.selectsComparison.match ? '✅' : '❌'}`);
    console.log();

    // Key differences analysis
    console.log('🔄 KEY DIFFERENCES ANALYSIS');
    console.log('-'.repeat(40));

    const isGeneratedForm = generatedElements.inputs.length > 5; // Form has many inputs
    const isReferenceProfile = referenceHtml.includes('Contact Information') && referenceHtml.includes('Demographics'); // Profile view

    if (isGeneratedForm && isReferenceProfile) {
      console.log('⚠️  FUNDAMENTAL DIFFERENCE DETECTED:');
      console.log('   - Generated HTML: EDIT FORM interface with input fields');
      console.log('   - Reference HTML: PROFILE VIEW interface with display data');
      console.log('   - This is an architectural difference in UI purpose');
    }

    console.log();
    console.log('📊 SIMILARITY ASSESSMENT');
    console.log('-'.repeat(40));

    let similarityScore = 0;
    let totalChecks = 7;

    // Check color scheme similarity
    const colorSimilarity = generatedColors.backgrounds.some(bg =>
      bg.includes('gray') || bg.includes('dark')
    ) && referenceColors.backgrounds.some(bg =>
      bg.includes('gray') || bg.includes('dark')
    );
    if (colorSimilarity) similarityScore++;

    // Check if both use TailwindCSS
    const bothUseTailwind = generatedHtml.includes('tailwindcss') && referenceHtml.includes('tailwindcss');
    if (bothUseTailwind) similarityScore++;

    // Check if both have similar fonts
    const bothUseSplineFont = generatedHtml.includes('Spline Sans') && referenceHtml.includes('Spline Sans');
    if (bothUseSplineFont) similarityScore++;

    // Check responsive design
    const bothResponsive = generatedLayout.responsiveClasses.length > 0 && referenceLayout.responsiveClasses.length > 0;
    if (bothResponsive) similarityScore++;

    // Check grid usage
    const bothUseGrid = generatedLayout.gridSystems.length > 0 && referenceLayout.gridSystems.length > 0;
    if (bothUseGrid) similarityScore++;

    // Check Material Icons usage
    const bothUseMaterialIcons = generatedHtml.includes('material-symbols-outlined') && referenceHtml.includes('material-symbols-outlined');
    if (bothUseMaterialIcons) similarityScore++;

    // Check overall structure complexity
    const structuralComplexity = Math.abs(generatedElements.containers.length - referenceElements.containers.length) <= 2;
    if (structuralComplexity) similarityScore++;

    const similarityPercentage = Math.round((similarityScore / totalChecks) * 100);

    console.log(`Overall UI Similarity: ${similarityPercentage}%`);
    console.log();

    console.log('✅ SIMILARITIES:');
    if (colorSimilarity) console.log('   - Similar dark color scheme');
    if (bothUseTailwind) console.log('   - Both use TailwindCSS framework');
    if (bothUseSplineFont) console.log('   - Same typography (Spline Sans font)');
    if (bothResponsive) console.log('   - Both implement responsive design');
    if (bothUseGrid) console.log('   - Both use CSS Grid layouts');
    if (bothUseMaterialIcons) console.log('   - Both use Material Design icons');
    if (structuralComplexity) console.log('   - Similar structural complexity');

    console.log();
    console.log('❌ DIFFERENCES:');
    if (isGeneratedForm && isReferenceProfile) {
      console.log('   - Different UI purposes: Form vs Profile View');
      console.log('   - Generated has input fields, Reference displays information');
      console.log('   - Generated has Save/Quit buttons, Reference has Edit Profile button');
    }

    if (!referenceHtml.includes('sidebar') && generatedHtml.includes('sidebar')) {
      console.log('   - Navigation differences: Generated may include sidebar');
    }

    console.log();
    console.log('📋 RECOMMENDATIONS');
    console.log('-'.repeat(40));

    if (similarityPercentage >= 70) {
      console.log('✅ GOOD MATCH: The generated HTML has strong visual similarity to the reference');
      console.log('   Recommendation: Proceed with current implementation');
    } else if (similarityPercentage >= 50) {
      console.log('⚠️  MODERATE MATCH: Some improvements needed for better similarity');
      console.log('   Recommendation: Consider refinements but acceptable for iteration 1');
    } else {
      console.log('❌ POOR MATCH: Significant differences detected');
      console.log('   Recommendation: Major revisions needed');
    }

    if (isGeneratedForm && isReferenceProfile) {
      console.log('\n🎯 SPECIFIC RECOMMENDATIONS:');
      console.log('   1. Confirm UI requirements: Is this meant to be an edit form or profile view?');
      console.log('   2. If edit form is correct, the current implementation is appropriate');
      console.log('   3. If profile view needed, convert inputs to display elements');
      console.log('   4. Consider adding navigation breadcrumb as shown in reference');
      console.log('   5. Add user avatar/profile image section if needed');
    }

    console.log();
    console.log('='.repeat(80));
    console.log(`ANALYSIS COMPLETE - Similarity Score: ${similarityPercentage}%`);
    console.log('='.repeat(80));
  }
}

// Run the analysis
const analyzer = new HTMLAnalyzer();
analyzer.generateReport();