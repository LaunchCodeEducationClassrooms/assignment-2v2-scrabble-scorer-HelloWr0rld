// inspired by https://exercism.io/tracks/javascript/exercises/etl/solutions/91f99a3cca9548cebe5975d7ebca6a85

const input = require("readline-sync");

const oldPointStructure = {
  1: ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'],
  2: ['D', 'G'],
  3: ['B', 'C', 'M', 'P'],
  4: ['F', 'H', 'V', 'W', 'Y'],
  5: ['K'],
  8: ['J', 'X'],
  10: ['Q', 'Z']
};

function oldScrabbleScorer(word) {
	word = word.toUpperCase();

	let letterPoints = "";
 
	for (let i = 0; i < word.length; i++) {
 
	  for (const pointValue in oldPointStructure) {
 
		 if (oldPointStructure[pointValue].includes(word[i])) {
			letterPoints += `Points for '${word[i]}': ${pointValue}\n`
		 }
 
	  }
	}

  return letterPoints;
 }

// your job is to finish writing these functions and variables that we've named //
// don't change the names or your program won't work as expected. //
let enteredWord = "";
function initialPrompt() {
   
   enteredWord = input.question("Let's play some scrabble! Enter a word to score: ")
    
   return enteredWord;
};

//console.log(oldScrabbleScorer(initialPrompt()))


let simpleScore = function(word) {
simpleScore = word.length * 1

return simpleScore
 };

//console.log(allOnePoint(initialPrompt()));
  
 
   
let vowelBonusScore = function(word) {
    word = word.toUpperCase();
    bonusScore = 0
for (i=0; i< word.length; i++){
  if (word[i] === "A" || word[i] === "O" ||word[i]==="I" || word[i]==="U" || word[i]==="E"){
      bonusScore += 3 
  }
    else{
      bonusScore  += 1

    }
  }
  return  bonusScore

};

 // console.log(bonusVowels(initialPrompt())); 

let simpleScoreObject = {
  name: "Simple Score",
  description: "Each letter is worth one point.",
  scoreFunction: simpleScore
  
};

let bonusVowelsObject ={
  name: "Bonus Vowels",
  description: "Vowels are three points, consonants are one.",
  scoreFunction: vowelBonusScore
};



let scrabbleScore = function(word){
  points = 0;
  word = word.toLowerCase();
  for (i=0; i<word.length; i++){
    points += Number(newPointStructure[word[i]])
  }
  return points
}
let scrabbleObject = {
  name: "Scrabble",
  description: "Traditional scoring algorthm.",
  scoreFunction: scrabbleScore
};
const scoringAlgorithms = [simpleScoreObject, bonusVowelsObject, scrabbleObject];

function scorerPrompt() {
  for (i=0; i<scoringAlgorithms.length; i++){
    console.log(`${i} - ${scoringAlgorithms[i].name}: ${scoringAlgorithms[i].description}`);
  }
  scoreChoice = Number(input.question("Please enter a number 0-2?"));
  console.log(scoringAlgorithms[scoreChoice].scoreFunction(enteredWord));
};
  

function transform(oldPointStructure) {
  let newPointObject = {};
  for ( item in oldPointStructure){
    for (let i=0; i< oldPointStructure[Number(item)].length; i++){
      newPointObject[oldPointStructure[Number(item)][i].toLowerCase()]= Number(item)
    }
  }
  return  newPointObject
};

let newPointStructure = transform(oldPointStructure);

function runProgram() {
   initialPrompt();
   scorerPrompt();
   
}

// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
   initialPrompt: initialPrompt,
   transform: transform,
   oldPointStructure: oldPointStructure,
   simpleScore: simpleScore,
   vowelBonusScore: vowelBonusScore,
   scrabbleScore: scrabbleScore,
   scoringAlgorithms: scoringAlgorithms,
   newPointStructure: newPointStructure,
	runProgram: runProgram,
	scorerPrompt: scorerPrompt
};

