// add solution here

const musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];

const instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];

var final = [];

function theBeatlesPlay(arrayOne, arrayTwo) {
  for(var i = 0; i < 4; i++) {
    var newSent = `${musicians[i]} plays ${instruments[i]}`;
    final.push(newSent);
  }
  return final;
}

const facts = [ "He was the last Beatle to learn to drive", "He was never a vegetarian", "He was a choir boy and boy scout", "He hated the sound of his own voice"];

var excitingFacts = [];
var counter = 0;
function johnLennonFacts () {

  while(counter < 5) {
    var exclaim = `${facts[i]}!`;
    excitingFacts.push(exclaim);
  }
  return excitingFacts;
}