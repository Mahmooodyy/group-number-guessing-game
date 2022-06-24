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

let num = Math.floor(Math.random() * 25) + 1;
app.get( '/guesses', function( req, res ){
  console.log( 'in get guesses');

  console.log(num);
  res.send( guessArray );

  // num;
  // console.log(num);
})

app.post( '/guesses', ( req, res) => {
  console.log( 'POST CREATED', req.body );
  guessArray.push( req.body );
  if (guessArray[0].p1 > num) {
    console.log('sheeee');
  }
//   function compareNum(guessArray, num){
//     console.log( guessArray, num);
// //   if (guessArray.p1 > num) {
// //     console.log('Too High!')
// //   }return 'It might be working'
//  }
          res.sendStatus( 201 );
  })
  
// console.log(checkForRandom); 
app.listen(PORT, () => {
  console.log ('Server is running on port', PORT)
})
