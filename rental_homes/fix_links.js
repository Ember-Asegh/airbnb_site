const fs = require('fs');

// Fix index.html
let index = fs.readFileSync('index.html', 'utf8');
index = index.replace(/<article class="group flex flex-col cursor-pointer">/g, '<article class="group flex flex-col cursor-pointer" onclick="window.location.href=\'property_detail.html\'">');
index = index.replace(/src="https:\/\/lh3\.googleusercontent\.com\/aida\/[^"]*"/, 'src="assets/logo.svg"');
fs.writeFileSync('index.html', index);

// Fix property_detail.html
let detail = fs.readFileSync('property_detail.html', 'utf8');
detail = detail.replace(/<button class="w-full bg-primary text-on-primary[^>]*>[\s\S]*?Reserve[\s\S]*?<\/button>/i, '<button class="w-full bg-primary text-on-primary font-label-lg text-label-lg py-3.5 rounded-xl shadow-md hover:opacity-95 transition-opacity active:scale-[0.98] mt-6" type="button" onclick="window.location.href=\'checkout.html\'">Reserve</button>');
detail = detail.replace(/src="https:\/\/lh3\.googleusercontent\.com\/aida\/[^"]*"/, 'src="assets/logo.svg"');
fs.writeFileSync('property_detail.html', detail);

// Fix checkout.html
let checkout = fs.readFileSync('checkout.html', 'utf8');
checkout = checkout.replace(/<button[^>]*>[\s\S]*?Request to book[\s\S]*?<\/button>/i, '<button class="w-full bg-primary text-on-primary font-label-lg text-label-lg py-4 rounded-xl shadow-md hover:opacity-95 transition-opacity active:scale-[0.98] mt-8 flex items-center justify-center gap-2" type="button" onclick="alert(\'Booking Confirmed!\'); window.location.href=\'index.html\'"><span class="material-symbols-outlined text-[20px]">lock</span><span>Confirm and pay</span></button>');
checkout = checkout.replace(/src="https:\/\/lh3\.googleusercontent\.com\/aida\/[^"]*"/, 'src="assets/logo.svg"');
fs.writeFileSync('checkout.html', checkout);

console.log("Links fixed!");
