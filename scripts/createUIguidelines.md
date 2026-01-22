# Prompt: Generate Project UI Guidelines Package

I want you to generate a **complete UI guidelines package** for my Angular project based on screenshots I provide.
**All UI elements must be based on "tailwind css"**
**Documantation can be found here** "https://context7.com/websites/tailwindcss"  

## Workflow Instructions
1. **Check for Screenshots**  
   - If I don’t upload screenshot images of the UI screens, please ask me to upload them **before you start**.  
   - Use the screenshots to extract colors, typography, and layout patterns.  

2. **Files to Generate (all included in ZIP):**
      ## 🧩 UI Folder Structure
      This document provides an overview of the **UI** folder structure, its
      purpose, and the role of each file and subfolder.

      ### 📁 Root Folder: `UI/`
      This is the main directory containing configuration files, style
      definitions, example components, and documentation for the user
      interface layer.
      #### 📂 `config/`
      Contains configuration files for UI frameworks and tools.
      - **Tailwind Config (`tailwind.config.js`)** → With design tokens and semantic components (`btn`, `card`, `badge`, `table`, `sidebar`).  
      #### 📂 `examples/`
      Holds sample HTML components and style guide references.
      - **Sample Angular Component (`component_name.component.html`)** → multipal examples component applying the styles, file per image.  
      - **Sample Angular Component (`style-guide.html`)** → general sample of HTML file implementation Showcase of all components styled by `tailwind-output.css`. 
      #### 📂 `Images/`
      provide all images that you received from the user and any other images that you decided to work with.
      
      ### 📄 Markdown Files in the root folder
      - **UI Guidelines (`ui-guidelines.md`) ** → Full spec with design tokens, typography, components, and usage notes.  
      - **Developer README (`ui-readme.md`)** → Short developer-friendly instructions on how to use the classes.
      - **Setup instractions (`SETUP.md`)** → This guide explains how to implement all of this in the Angular project in order to apply the the  UI design system. 
      - **General instractions (`README.md`)** → This file will any other information that might be relevant for the developer. 
      
3. **Packaging**  
   - At the end, combine all generated files into **one downloadable ZIP file**.  
   - Provide the ZIP file as a direct download link.  

4. **Additional Rules**  
   - Always structure guidelines in a **clear, developer-ready format**.  
   - Default to SCSS/CSS variables + Tailwind config for design tokens.  
   - Ensure consistency across all files.  
   - If I ask for previews (like screenshots), generate them; otherwise, skip.  

---

# Example Trigger
“Please generate the Project UI guidelines package for me.”  

Then:  
- You (ChatGPT) → Ask me to upload screenshots.  
- I upload them.  
- You → Extract style system → Generate files as described in the Files to Generate section → Create ZIP including all subfolders in the zip file→ Share download link.  
