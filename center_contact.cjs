const fs = require('fs');

let css = fs.readFileSync('src/index.css', 'utf8');

// Membuat ikon sosmed berada di tengah
if (css.includes('.social-icons {\n    display: flex;\n    gap: 12px;\n}')) {
    css = css.replace('.social-icons {\n    display: flex;\n    gap: 12px;\n}', '.social-icons {\n    display: flex;\n    gap: 12px;\n    justify-content: center;\n}');
} else if (css.includes('.social-icons {\r\n    display: flex;\r\n    gap: 12px;\r\n}')) {
    css = css.replace('.social-icons {\r\n    display: flex;\r\n    gap: 12px;\r\n}', '.social-icons {\r\n    display: flex;\r\n    gap: 12px;\r\n    justify-content: center;\r\n}');
}

// Menjadikan box alamat dan email berada di tengah (flex column, align center)
// Menimpa justify-content yang sebelumnya disisipkan
css = css.replace(/\.contact-methods\s*\{\s*justify-content:\s*center;\s*\n/, '.contact-methods {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n');

// Supaya method-item (email/lokasi) tetap rata kiri di dalamnya (agar ikon sejajar) tapi bloknya ke tengah
// tidak perlu tambahan jika sudah align-items center, kotaknya akan memusat.
// Tapi karena lebarnya mungkin beda, kita set lebarnya konsisten
if (!css.includes('width: 300px;') && css.includes('.method-item {\\n    display: flex;')) {
     css = css.replace('.method-item {\\n    display: flex;', '.method-item {\\n    display: flex;\\n    width: 320px;\\n    text-align: left;');
}

fs.writeFileSync('src/index.css', css);
