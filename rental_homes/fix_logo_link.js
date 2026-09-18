const fs = require('fs');

['index.html', 'property_detail.html', 'checkout.html'].forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    content = content.replace(/<img alt="StayNest Logo" class="h-8 w-auto object-contain" src="assets\/logo\.svg"\/>/, '<a href="index.html"><img alt="StayNest Logo" class="h-8 w-auto object-contain" src="assets/logo.svg"/></a>');
    fs.writeFileSync(file, content);
});
console.log("Logo links fixed!");
