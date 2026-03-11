import { writeFileSync } from 'fs';
writeFileSync('dist/_redirects', '/* /.netlify/functions/ssr 200\n');
console.log('_redirects fixed!');