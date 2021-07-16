// Random word
let words = [
    'javascript',
    'monkey',
    'amazing',
    'pancake',
    'guide',
    'cat',
    'banana',
    'dog',
    'house',
    'sea',
    'found',
    'member',
    'splash',
    'random',
];

let word = words[Math.floor(Math.random() * words.length)];

// Answer array

let answerArray = [];
for(let i = 0; i < word.length; i++) {
    answerArray[i] = '_';
}

var remainingLetters = word.length;
