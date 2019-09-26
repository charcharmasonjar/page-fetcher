/*
INSTRUCTIONS:
Implement a small command line node app called fetcher.js 
which should take a URL as a command-line argument 
as well as a local file path and download the resource
to the specified path.
*/

//request library
const request = require('request');
//fs module(needed to write the file);
const fs = require('fs');

//get input from the command line
const URL = process.argv[2];
const filePath = process.argv[3];

const getHTML = () => {
  request(URL, (error, response, body) => {
    if (error) throw error; 
    fs.writeFile(filePath, body, function (err) {
      if (err) throw err;
    });
    let size = response.headers['content-length']
    console.log(`Downloaded and saved ${size} bytes to ${filePath}`);
  });
}

getHTML();