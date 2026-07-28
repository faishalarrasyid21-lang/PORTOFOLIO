const fs = require('fs');
let css = fs.readFileSync('src/index.css', 'utf8');

// Ubah contact-methods jadi row agar menyamping
css = css.replace(/\.contact-methods\s*\{[^}]*\}/, `.contact-methods {\n    display: flex;\n    flex-direction: row;\n    flex-wrap: wrap;\n    justify-content: center;\n    gap: 40px;\n    margin-bottom: 40px;\n}`);

// Perbaiki margin dan posisi social-links
css = css.replace(/\.social-links\s*\{[^}]*\}/, `.social-links {\n    margin-top: 30px;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}`);

fs.writeFileSync('src/index.css', css);
