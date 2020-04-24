const fs = require('fs');
const originalJs = fs.readFileSync('src/iife.js').toString('utf-8');
const formattedJs = originalJs.replace(/(\n|\s[2])/g, '');

process.stdout.write(`javascript:` + formattedJs);
