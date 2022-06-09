const args = process.argv.slice(2);
const request = require("request");

const url = 'https://api.thecatapi.com/v1/breeds/search?name=' + args;
request(url, (error, response, body) => {
  if (error) {
    console.log(error);
  }
  const data = JSON.parse(body);
  if (data.length === 0) {
    console.log("Not found lul");
  } else {
    console.log(data[0].description);
  }
});