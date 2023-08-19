const startButton = document.getElementById('START');
const questionContainerElement = document.getElementById('Questions');
const questionElement = document.getElementById('questions?');
const answerButtonsElement = document.getElementById('answerButtons');
let shuffledQuestions, currentQuestionIndex;
let Time;
let sec = 60;

startButton.addEventListener('click', startGame);

function startGame() {
    startButton.classList.add('hide');
    shuffledQuestions = questions.sort(() => Math.random() - 0.5);
    questionContainerElement.classList.remove('hide');
    currentQuestionIndex = 0;
    setNextQuestion();

    // Start the timer when the game starts
    Time = setInterval(() => {
        document.getElementById('Timer').innerText = '00:' + (sec < 10 ? '0' : '') + sec;
        sec--;
        if (sec < 0) {
            clearInterval(Time);
            document.getElementById('Timer').innerText = 'Time Out';
        }
    }, 1000);
}



function setNextQuestion() {
    resetState();
    if (currentQuestionIndex < questions.length) {
        showQuestion(shuffledQuestions[currentQuestionIndex]);
    } else {
        // All questions are answered, end the game here
        clearInterval(Time);
        document.getElementById('Timer').innerText = 'Game Over';
    }
}



function showQuestion(question) {
    questionElement.innerText = question.questions;
    question.answers.forEach((answers) => {
        const button = document.createElement('button');
        button.innerText = answers.text;
        button.classList.add('button');
        if (answers.correct) {
            button.dataset.correct = answers.correct;
        }
        button.addEventListener('click', selectAnswer);
        answerButtonsElement.appendChild(button);
    });
}

function resetState() {
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild);
    }
}

function selectAnswer(event) {
    const selectedButton = event.target;
    const correct = selectedButton.dataset.correct;

    if (!correct) {
        sec -= 10; // Reduce 10 seconds for wrong answer
    }

    // You can add other logic here to handle the selected answer, e.g., highlighting correct/wrong answers

    // Move to the next question
    currentQuestionIndex++;
    setNextQuestion();
}

const questions = [
    {
        questions: 'what is the element p1 for in HTML',
        answers: [
            { text: 'paragraphs', correct: true },
            { text: 'Headers', correct: false },
            { text: 'Titles', correct: false },
            { text: 'Footers', correct: false },
        ],
    },
    {
        questions: 'What is mainly used to style websites',
        answers: [
            { text: 'CSS', correct: true },
            { text: 'HTML', correct: false },
            { text: 'javascript', correct: false },
            { text: 'none of the above', correct: false },
        ],
    },
    {
        questions: 'what is javascript considered when linking together webpages',
        answers: [
            { text: 'brain', correct: true },
            { text: 'foot', correct: false },
            { text: 'mouth', correct: false },
            { text: 'hands', correct: false },
        ],
    },
];
