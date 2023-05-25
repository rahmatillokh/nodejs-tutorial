const path = require("path")

console.log(path.basename(__filename));     // path.js
console.log(path.dirname(__filename));      // /media/rahmatillo/HDD Storage/Coding/NodeJS/tutorial/sammi/tutorial/modules
console.log(path.extname(__filename));      // .js

console.log(path.basename(__dirname));     // modules
console.log(path.dirname(__dirname));      // /media/rahmatillo/HDD Storage/Coding/NodeJS/tutorial/sammi/tutorial
console.log(path.extname(__dirname));      // 

console.log(path.parse(__filename));
/* {
  root: '/',
  dir: '/media/rahmatillo/HDD Storage/Coding/NodeJS/tutorial/sammi/tutorial/modules',
  base: 'path.js',
  ext: '.js',
  name: 'path'
} */

console.log(path.join(__dirname, "templates", "index.html"));
// /media/rahmatillo/HDD Storage/Coding/NodeJS/tutorial/sammi/tutorial/modules/templates/index.html
console.log(path.resolve(__dirname, "templates", "index.html"));
// /media/rahmatillo/HDD Storage/Coding/NodeJS/tutorial/sammi/tutorial/modules/templates/index.html
