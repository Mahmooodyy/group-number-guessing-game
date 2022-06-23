const express = require('express');
const bodyParser = require('body-parser');
const guessArray = require('./modules/guessArray.js');
const app = express();
const PORT = 5000;



// This must be added before GET & POST routes.
app.use(bodyParser.urlencoded({extended:true}))

// Serve up static files (HTML, CSS, Client JS)
app.use(express.static('server/public'));

// GET & POST Routes go here

app.get( '/guesses', function( req, res ){
  console.log( 'in get inventory');
  res.send( guessArray );
});

app.post( '/guesses', ( req, res) => {
  console.log( 'POST CREATED', req.body );
  guessArray.push( req.body );
  // We still need to create the radom # and compare it
  
    res.sendStatus( 201 );
  })
  


// testing for random number function 
// console.log(checkForRandom); 

app.listen(PORT, () => {
  console.log ('Server is running on port', PORT)
})
