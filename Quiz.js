const questions = [{
        question: "wich is larget animal in the world?",
        answers: [

            { text: "shark", correct: false },
            { text: "blue whale", correct: true },
            { text: "Elephent", correct: false },
            { text: "giraffe", correct: false },
        ]
    }, {
        question: "wich is larget in the world?",
        answers: [

            { text: "shark", correct: false },
            { text: "blue whale", correct: true },
            { text: "Elephent", correct: false },
            { text: "giraffe", correct: false },
        ]
    }, {
        question: "wich is larget in the world?",
        answers: [

            { text: "shark", correct: false },
            { text: "blue whale", correct: true },
            { text: "Elephent", correct: false },
            { text: "giraffe", correct: false },
        ]
    }, {
        question: "wich is larget in the world?",
        answers: [

            { text: "shark", correct: false },
            { text: "blue whale", correct: true },
            { text: "Elephent", correct: false },
            { text: "giraffe", correct: false },
        ]
    }

];
const questionElememt = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();

}

function showQuestion() {
    resetstate();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNO = currentQuestionIndex + 1;
    questionElememt.innerHTML = questionNO + "." + currentQuestion.question;


    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("clik", selectAnswer);


    });
}

function resetstate() {
    nextButton.style.display = "none";
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild)
    }
}

function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.datadet.correct === "true";
    if (isCorrect) {
        selectedBtn.classList.add("correct");
        score++;

    } else {
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if (button.datadet.correct === "true") {
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block"

}

function showScore() {
    resetstate();
    questionElememt.innerHTML = `you score ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "play Again";
    nextButton.style.display = "block";
}

function handleNextButton() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showScore();
    }
}

nextButton.addEventListener("click", () => {
    if (currentQuestionIndex < questions.length) {
        handleNextButton();

    } else {
        startQuiz();
    }
});