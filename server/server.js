const express = require('express');
const bodyParser = require('body-parser');
const getRandomNumber = require( './modules/random.js' );
const app = express();
const PORT = 5000;

// This must be added before GET & POST routes.
app.use(bodyParser.urlencoded({extended:true}))

// Serve up static files (HTML, CSS, Client JS)
app.use(express.static('server/public'));

// GET & POST Routes go here
let guesses = [];

app.get( '/inventory', function( req, res ){
  console.log( 'in get inventory');
  res.send( inventoryList );
});

// testing for random number function 
console.log(getRandomNumber);


app.listen(PORT, () => {
  console.log ('Server is running on port', PORT)
})
