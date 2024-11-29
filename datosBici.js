const fs = require('fs');
const file = fs.readFileSync("./bicicletas.json","utf-8");
const bicicletas = JSON.parse(file);

module.exports = bicicletas;
