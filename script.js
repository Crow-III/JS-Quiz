const startButton = document.getElementById('START')
const nextButton = document.getElementById('NEXT')
const questionContainerElement = document.getElementById('Questions')
const questionElement = document.getElementById('questions?')
const answerButtonsElement = document.getElementById('answerButtons')
let shuffledQuestions, currentQuestionIndex


startButton.addEventListener('click', startGame)


// Timer for quiz not complete
var Time
var Timer = document.getElementById('Timer');

(function () {
var sec = 0; 
Time = setInterval (()=>{
Timer.innerText = '60:'})
})

//will start quiz
function startGame() {
startButton.classList.add('hide')
shuffledQuestions = questions.sort(()=> Math.random() - .5)
questionContainerElement.classList.remove('hide')
currentQuestionIndex = 0
setNextQuestion()
}


function setNextQuestion() {
showQuestion(shuffledQuestions[currentQuestionIndex])
resetState()
}


function showQuestion(question) {
    questionElement.innerText = question.questions
    question.answers.forEach(answers => {
        const button = document.createElement('button')
        button.innerText = answers.text
        button.classList.add('button')
        if (answers.correct) {
            button.dataset.correct = answers.correct
        }
        button.addEventListener('click', selectAnswer)
        answerButtonsElement.appendChild(button)
    })
}

function resetState() {
    nextButton.classList.add('hide')
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild
        (answerButtonsElement.firstChild)
    }
}

function selectAnswer() {

}

const questions = [
    {
        questions: 'what is the element p1 for in HTML',
        answers: [
            {text: 'paragraphs', correct: true },
            {text: 'Headers', correct: false},
            {text: 'Titles', correct: false},
            {text: 'Footers', correct: false}
        ]
    }
]