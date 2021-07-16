// Массив из слов
let words = [
    'яблоко',
    'фея',
    'кот',
    'печенька',
    'пиво',
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

// Рандомное слово из массива
let word = words[Math.floor(Math.random() * words.length)];

// Массив ответов
let answerArray = [];
for(let i = 0; i < word.length; i++) {
    answerArray[i] = '_';
}

let remainingLetters = word.length;

// Цикл игры
while(remainingLetters > 0) {
    // Прогресс игрока
    alert(answerArray.join(' '));

    // Получение буквы от игрока
    let guess = prompt('Введите букву, или нажмите Отмена чтобы выйти из игры.');
    if (guess === null) {
        // Выход из цикла
        break;
    } else if (guess.length !== 1) {
        alert('Пожалуйста, введите одну букву');
    } else {
        // Обновление состояния игры
        for(let j = 0; j < word.length; j++) {
            if (word[j] === guess) {
                answerArray[j] = guess;
                remainingLetters--;
            }
        }
    }
    // Конец цикла игры
}

    // Вывод ответа и поздравления
    alert(answerArray.join(' '));
    alert(`Отлично! Ты отгадал слово - ${word}`);