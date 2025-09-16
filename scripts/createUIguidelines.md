# Prompt: Generate Eventit UI Guidelines Package

I want you to generate a **complete UI guidelines package** for my project based on screenshots I provide.  

## Workflow Instructions
1. **Check for Screenshots**  
   - If I don’t upload screenshot images of the UI screens, please ask me to upload them **before you start**.  
   - Use the screenshots to extract colors, typography, and layout patterns.  

2. **Ask About Filenames**  
   - For every file you plan to create, suggest a default filename (e.g., `tailwind.config.js`, `project.css`, `ui-guidelines.md`, etc.).  
   - Always ask me if I want to change any filename **before creating the files**.  

3. **Files to Generate (all included in ZIP):**
   - **UI Guidelines (Markdown)** → Full spec with design tokens, typography, components, and usage notes.  
   - **Tailwind Config (`tailwind.config.js`)** → With design tokens and semantic components (`btn`, `card`, `badge`, `table`, `sidebar`).  
   - **Developer README (`ui-readme.md`)** → Short developer-friendly instructions on how to use the classes.  
   - **Global CSS (`project.css`)** → Central stylesheet for all components, usable without Tailwind.  
   - **Sample Angular Component (`event-card.component.html`)** → Example component applying the styles.  
   - **Style Guide HTML (`style-guide.html`)** → Showcase of all components styled by `project.css`.  

4. **Packaging**  
   - At the end, combine all generated files into **one downloadable ZIP file**.  
   - Provide the ZIP file as a direct download link.  

5. **Additional Rules**  
   - Always structure guidelines in a **clear, developer-ready format**.  
   - Default to SCSS/CSS variables + Tailwind config for design tokens.  
   - Ensure consistency across all files.  
   - If I ask for previews (like screenshots), generate them; otherwise, skip.  

---

# Example Trigger
“Please generate the Eventit UI guidelines package for me.”  

Then:  
- You (ChatGPT) → Ask me to upload screenshots.  
- I upload them.  
- You → Extract style system → Confirm filenames → Generate files → Create ZIP → Share download link.  
