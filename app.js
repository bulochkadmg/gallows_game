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
    'frog',
    'random',
];

let word = words[Math.floor(Math.random() * words.length)];

// Answer array
let answerArray = [];
for(let i = 0; i < word.length; i++) {
    answerArray[i] = '_';
}

let remainingLetters = word.length;

// Game cicle
while(remainingLetters > 0) {
    alert(answerArray.join(' '));
    let guess = prompt('Guess a letter, or click Cancel to stop playing.');
    if (guess === null) {
        break;
    } else if (guess.length !== 1) {
        alert('Please enter a single letter');
    } else {
        // Update the game state with the guess
    }
    // Game code goes here
    // Show the player their progress
    // Take input from the player
    // Update answerArray and remainingLetters
    // for every correct guess
}