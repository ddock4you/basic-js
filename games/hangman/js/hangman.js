// const words = [
//     'javascript',
//     'monkey',
//     'amazing',
//     'pancake',
// ];


// let word = words[Math.floor(Math.random() * words.length)];

// let answerArray = [];
// for (let i = 0; i < word.length; i++) {
//     answerArray[i] = '-'; 
// }

// let remainingLetters = word.length;

// while (remainingLetters > 0) {
//     alert(answerArray.join(''));

//     let guess = prompt('글자를 입력하세요. 취소를 누르면 게임을 멈춥니다.').toLowerCase();
//     if (guess === null) {
//         break;
//     } else if (guess.length !== 1) {
//         alert('한 글자만 입력해주세요.');
//     } else {
//         for (let j = 0; j < word.length; j++) {
//             if(answerArray[j] === guess) {
//                 alert('이미 입력한 답입니다.');
//                 break;
//             } else if (word[j] === guess) {
//                 answerArray[j] = guess;
//                 remainingLetters--;
//             }
//         }
//     }      
// }

// alert(answerArray.join(''));
// alert(`정답은 ${word} 입니다.`);

const selctedWord = () => {
    const words = [
        'javascript',
        'monkey',
        'amazing',
        'pancake',
    ];

    return words[Math.floor(Math.random() * words.length)];
}

const setAnswerArray = (word) => {
    let answerArray = [];
    for (let i = 0; i < word.length; i++) {
        answerArray[i] = '-'; 
    }

    return answerArray;
}

const showStatus = (answerArray) => {
    alert(answerArray.join(''));
};

const getGuess = () => {
    return prompt('글자를 입력하세요. 취소를 누르면 게임을 멈춥니다.');
};

const updateGameStatus = (guess, word, answerArray) => {
    let appearances = 0;
    for (let j = 0; j < word.length; j++) {
        if(answerArray[j] === guess) {
            alert('이미 입력한 답입니다.');
            break;
        } else if (word[j] === guess) {
            answerArray[j] = guess;
            appearances++;
        }
    }

    return appearances;
};

const gameOver = () => {
    showStatus(answerArray);
    alert(`정답은 ${word} 입니다.`);
}

let word = selctedWord();
let answerArray = setAnswerArray(word);
let remainingLetters = word.length;

while (remainingLetters > 0) {
    showStatus(answerArray);
    let guess = getGuess();

    if (guess === null) {
        break;
    } else if (guess.length !== 1) {
        alert('한 글자만 입력해주세요.');
    } else {
        let correctGuesses = updateGameStatus(guess, word, answerArray);
        remainingLetters -= correctGuesses;
    }      
}

gameOver(answerArray);