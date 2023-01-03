const fs = require('fs');

// Find the index of the --country flag
const flagIndex = process.argv.indexOf('--country');
// Get the file path from the command-line arguments

const countryName = process.argv[flagIndex + 1];

fs.readFile(`./country/${countryName}.json`, (err, data) => {
  if (err) throw err;

  // Parse the data into a JavaScript object
  let json = JSON.parse(data);

  // Select a random item from the array
  let randomItem = json[Math.floor(Math.random() * json.length)];

  console.log(randomItem);
});

// ./country/Sweden.json
