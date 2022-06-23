$(document).ready(handleReady);

function handleReady() {
  console.log("jquery is loaded!")
  $('#submit').on('click', handleSubmit);
}


let guesses = [];
function handleSubmit(){
  console.log('click!!');
  let oneGuess = $('#pOne').val()
  let twoGuess = $('#pTwo').val()
  let threeGuess = $('#pThree').val()
  let fourGuess = $('#pFour').val()

  
}