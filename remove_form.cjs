const fs = require('fs');

let content = fs.readFileSync('src/components/Contact.jsx', 'utf8');
// Hapus form state dan fungsi handleSubmit
content = content.replace(/const \[name.*?\}, 5000\);\s*};\s*/s, '');
// Hapus tag HTML form 
content = content.replace(/\s*\{\/\* Contact Form \*\/\}.*?<\/motion\.div>/s, '');
// Hapus useState import
content = content.replace(/import React, \{ useState \} from 'react';/, "import React from 'react';");
fs.writeFileSync('src/components/Contact.jsx', content);

let css = fs.readFileSync('src/index.css', 'utf8');
// Ubah layout CSS agar info kontak rata tengah setelah form dihapus
css = css.replace(/\.contact-grid\s*\{[^}]*\}/, `.contact-grid {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    max-width: 700px;\n    margin: 0 auto;\n    text-align: center;\n}`);
// Rata-tengahkan ikon metode kontak
css = css.replace(/\.contact-methods\s*\{/, `.contact-methods {\n    justify-content: center;\n`);
fs.writeFileSync('src/index.css', css);
