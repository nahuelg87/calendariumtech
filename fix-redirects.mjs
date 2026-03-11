import { writeFileSync } from "fs";
writeFileSync("dist/_redirects", "/* /.netlify/functions/ssr 200
");
console.log("_redirects fixed!");
