const args = process.argv.slice(2);
const request = require("request");

const fetchBreedDescription = function(breedName, callback) {
  const url = 'https://api.thecatapi.com/v1/breeds/search?name=' + breedName;
  request(url, (error, response, body) => {
    if (error) {
      callback('error found: ', null);
      return;
    }
    const data = JSON.parse(body);
    if (data.length === 0) {
      callback(`Sorry! ${breedName} is not a cat breed.`, null);
      return;
    } else {
      callback(null, data[0].description);
    }
  });
};

module.exports = {fetchBreedDescription};

