
let score = 0;

function questionColor () {
  let Color = prompt('Is My favorite color orange?')
  let fColor = Color.toLowerCase()
  if (fColor === 'yes' || fColor === 'y') {
  // console.log('you are right i love orange!');
    alert('You are right I love the color orange!');
    score = score + 1;

  } else if (fColor === 'no' || fColor === 'n') {
  // console.log('you are incorrect my favorite color is orange');
    alert('Nope you are incorrect my favorite color is orange');

  } else {
    alert('invalid response try again')
  }   
}

function questionSport () {
  let Sport = prompt('Is my favorite sport basketball?')
  let fSport = Sport.toLowerCase()
  if (fSport === 'yes' || fSport === 'y') {
  // console.log('Nope you are incorrect my favorite sport is baseball');
    alert('Nope you are incorrect my favorite sport is baseball');

  } else if (fSport === 'no' || fSport === 'n') {
  //console.log('You are right! I actually love baseball!!');
    alert('You are right! I actually love baseball!!');
    score = score + 1;

  } else {
    alert('invalid response try again')
  }
}


function questionFood () {
  let Food = prompt('Is my favorite food burgers?')  
  let fFood = Food.toLowerCase()
  if (fFood === 'yes' || fFood === 'y') {
    //console.log('Nope you are incorrect my favorite food is sushi');
    alert('Nope you are incorrect my favorite food is sushi');

  } else if (fFood === 'no' || fFood === 'n') {
  //console.log('You are right! I actually love sushi');
    alert('You are right! I actually love sushi');
    score = score + 1;

  } else {
    alert('invalid response try again')
  }
}

function questionPlace () {
  let Place = prompt('Is my favorite place to travel Cuba?')
  let fPlace = Place.toLowerCase()
  if (fPlace === 'yes' || fPlace === 'y') {
    //console.log('you are right i love visiting Cuba!');
    alert('You are right I love visitng Cuba!');
    score = score + 1;

  } else if (fPlace === 'no' || fPlace === 'n') {
    //console.log('you are incorrect my favorite place to travel is Cuba');
    alert('Nope you are incorrect my favorite place to travel is Cuba');

  } else {
    alert('invalid response try again')
  }
}

function questionPT () {
  let PT = prompt('Is my favorite passtime gaming?')
  let fPT = PT.toLowerCase()
  if (fPT === 'yes' || fPT === 'y') {
    //console.log('you are right i love gaming!');
    alert('You are right I love gaming!');
    score = score + 1;

  } else if (fPT === 'no' || fPT === 'n') {
    //console.log('you are incorrect my favorite passtime is gaming');
    alert('Nope you are incorrect my favorite passtime is gaming');

  } else {
    alert('invalid response try again')
  }
}

function questionNumberG () {
  let correct = false
  let guesses = 4
  let numberG = Math.floor((Math.random() * 100) + 1);
  console.log(numberG)
  let userGuess = prompt('Guess a number from 1-100')
    while ( guesses > 0) {
      if (userGuess == numberG) {
        alert('You are right! Wow GREAT GUESS')
        score = score + 1;
        correct = true
        break;
      } else if (userGuess > numberG) {
        guesses = guesses - 1
        userGuess = prompt('too high, guess again: ')
        
      } else if (userGuess < numberG) {
        guesses = guesses - 1
        userGuess = prompt('too low, guess again: ')
        
      }
                  
      if (correct) {
        break;
      } else if (guesses === 0) {    
        alert('Nice try, you are out of guesses, the number is ' + numberG);
    }
  }
}

function questionFavFoods () {
let correct = false
let guesses = 6
let favFoods = ['pizza', 'pasta', 'wings', 'sushi']
let userGuess = prompt('Guess what else I like to eat:')
  while ( guesses > 0) {
    for(j = 0; j < favFoods.length; j++) {
      if (userGuess.toLowerCase() == favFoods[j]) {
        alert('You are right! I love: ' + favFoods[j])
        score = score + 1;
        correct = true;
        break;
      } 
    }
    if (correct) {
      break;
    }
    guesses = guesses - 1
    if (guesses > 0) {
      userGuess = prompt('not quite, guess again: ')
    }
  }
}
questionColor();
questionSport();
questionFood();
questionPlace();
questionPT();
questionNumberG();
questionFavFoods();

alert('my favorite foods are pizza, pasta, wings, and sushi!');
alert('Out of 7 questions, you got ' + score +'/7!')
alert('Refresh the page and try again for a higher score!');

// booty


      
   
