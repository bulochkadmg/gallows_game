// Функции
let pickWord = function() {
    // Возвращаем случайное слово
    let words = [
        'яблоко',
        'фея',
        'кот',
        'печенька',
        'пиво',
        'телефон',
        'чашка',
        'балкон',
        'дерево',
        'роза',
        'молоток',
        'котик',
        'банан',
        'собака',
        'ревасик',
        'море',
        'компьютер',
        'память',
        'дом',
        'лягушка',
        'пылесос',
    ];

    return words[Math.floor(Math.random() * words.length)];
};

let setupAnswerArray = function(word) {
    // Возвращаем массив ответов
    var answerArray = [];

    for(let i = 0; i < word.length; i++) {
        answerArray[i] = '_';
    }
    return answerArray;
};

let showPlayerProgress = function(answerArray) {
    // показываем игроку его прогресс
    alert(answerArray.join(' '));
};

let getGuess = function() {
    // Получаем букву от пользователя
   return prompt('Введите букву, или нажмите Отмена чтобы выйти из игры.');
};

let updateGameState = function(guess, word, answerArray) {
    // Обновление состояния игры
    let appearances = 0;
    for (let j = 0; j < word.length; j++) {
      if (word[j] === guess) {
        answerArray[j] = guess;
        appearances++;
      }
    }

    return appearances;
};

let showAnswerAndCongratulatePlayer = function(answerArray) {
    // показываем ответ и поздравляем игрока
    showPlayerProgress(answerArray);
    alert("Отлично! Было загадано слово " + answerArray.join(""));
};

// Логика игры
// word: загаданное слово
let word = pickWord();
// answerArray: итоговый массив
let answerArray = setupAnswerArray(word);
// remainingLetters: сколько букв осталось угадать
let remainingLetters = word.length;

while (remainingLetters > 0) {
  showPlayerProgress(answerArray);
  // guess: ответ игрока
  let guess = getGuess();
  guess = guess.toLowerCase();
  if (guess === null) {
    break;
  } else if (guess.length !== 1) {
    alert("Пожалуйста, введите одиночную букву.");
  } else {
    // correctGuesses: количество открытых букв
    let correctGuesses = updateGameState(guess, word, answerArray);
    remainingLetters -= correctGuesses;
  }
}

showAnswerAndCongratulatePlayer(answerArray);