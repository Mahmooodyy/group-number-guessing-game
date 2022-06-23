$(onReady);

function onReady() {
  console.log("jquery is loaded!")
  getArray();
  $('#submit').on('click', handleSubmit);
  
}

// let guessArray = [];

function getArray(){
  $.ajax({
      url: '/guesses',
      method: 'GET'
  }).then( function( response ){
      console.log( response )
      render( response );
  });
      console.log( 'end of getArray')
  };


function handleSubmit(){
  // new object is created
  const newGuess = {
    p1: $('#pOne').val(),
    p2: $('#pTwo').val(),
    p3: $('#pThree').val(),
    p4: $('#pFour').val(),
  }
    
  // POST request is created
  $.ajax({
  url: '/guesses',
  method: 'POST',
  data: newGuess //data here becomes req.body on the server
  }).then( function(response){
  console.log(response)
  getArray();
}) 
  
};

//counter function
let roundCounter = 1
// needs to be linked in the handleSubmit
function incrementRoundCounter(){
  console.log('in counter')
roundCounter +=1
let roundCounterTally = $('#roundCounter');
roundCounterTally.empty();
roundCounterTally.append(roundCounter);
console.log('end counter')
}

  incrementRoundCounter();
  
//   guessArray.push(
//     {
//       name: 'playerOne',
//       guess: $('#pOne').val()
//     },
//     {
//       name: 'playerTwo',
//       guess: $('#pTwo').val()
//     },
//     {
//       name: 'playerThree',
//       guess: $('#pThree').val()
//     },
//     {
//       name: 'playerFour',
//       guess: $('#pFour').val()
//     }
//   )
//   //clear inputs
//   // $('#pOne').val('')
//   // $('#pTwo').val('')
//   // $('#pThree').val('')
//   // $('#pFour').val('')
// };


function render(guessArray) {
  //empty
  $('#playerTable').empty();
  //append
  for (let i = 0; i<guessArray.length; i++){
    $('#playerTable').empty().append(
      `<tr>
        <td class ='table-row'>${guessArray[i].p1}</td>
        <td class ='table-row'>${guessArray[i].p2}</td>
        <td class ='table-row'>${guessArray[i].p3}</td>
        <td class ='table-row'>${guessArray[i].p4}</td>
      </tr>`
    )
  }
};

