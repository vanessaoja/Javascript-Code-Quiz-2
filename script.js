const startButton = document.getElementById('start');
const questionContainerElement = document.getElementById('question-container');
const questionElemenmt = document.getElementById('question');
const answerButtonElement = document.getElementById('answer-buttons')
startButton.addEventListener('click', startGame);


function startGame() {;
    console.log('Started');
    startButton.classList.add('hide');
    currentQuestionIndex = 0;
    questionContainerElement.classList.remove('hide');
    setNextQuestion()
};

function setNextQuestion() {
};

function showQuestion(question) {

}

function selectAnswer() {

};

const questions = [ 
{
    question: 'What language is JavaScript?', 
    answer: [
        {text: 'object-oriented', correct: true},
        {text: 'object-based', correct: false},
        {text: 'Proceduaral', correct: false},
        {text: 'Noce of the above', correct: false},
    ]

}
]

