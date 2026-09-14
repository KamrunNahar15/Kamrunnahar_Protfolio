// Resume asset loader
// Place your Kamrun_Nahar_Resume.pdf in this src/assets/ folder
// Vite will bundle it properly without 404 errors

// Import resume if it exists in the assets folder
// For now, this exports the path reference that Vite can resolve

export const resumePath = new URL('./Kamrun_Nahar_Resume.pdf', import.meta.url).href;
