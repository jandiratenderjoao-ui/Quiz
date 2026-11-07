
const questions = [
    {
        question: "O que é o software?",
        options: ["A parte física e material do computador", "O cunjunto de programas e instruções capazes de fazer funcionar o hardware", "O conjunto de pessoas que utilizam o computador", "Oa dispositivos utilizados para armazenar energia"],
        answer: "O cunjunto de programas e instruções capazes de fazer funcionar o hardware"
    },
    {
        question: "Em quantas categorias principais se subdivide o software?",
        options: ["Em duas categorias principais: software de sistema e software de aplicação", "Messi", "Mbappé", "Neto"],
        answer: "Messi"
    },
    {
        question: "Que curso é que os criadores deste quiz fizeram?",
        options: ["TLQB", "TI", "Frio e Climatização", "Maquinas e Motores"],
        answer: "TI"
    },
    {
        question: "Qual é o valor que centraliza items na horizontal em um flex container",
        options: ["align-items:center", "justify-content:center", "text-align:center", "place-content:top"],
        answer: "justify-content:center"
    },
    {
        question: "Qual é a tag do HTML que insere o título com o tamnho mais largo?",
        options: ["<heading>", "<head>", "<h6>", "<h1>"],
        answer: "<h1>"
    },
    {
        question: "Qual é a propriedade do CSS que muda a cor do texto?",
        options: ["font-color", "text-color", "color", "foreground"],
        answer: "color"
    },
    {
        question: "Which JavaScript keyword creates a variable that cannot be reassigned?",
        options: ["let", "var", "const", "static"],
        answer: "const"
    },
    {
        question: "Qual é a propriedade do CSS que muda o tamanho da letra?",
        options: ["text-size", "font-size", "font-scale", "size"],
        answer: "font-size"
    },
    {
        question: "Qual método adiciona itens no fim de um array do JavaScript?",
        options: ["add()", "push()", "append()", "insert()"],
        answer: "push()"
    },
    {
        question: "Qual das propriedades arredonda os cantos de um elemento no CSS?",
        options: ["corner-radius", "radius", "border-radius", "round"],
        answer: "border-radius"
    },
    {
        question: "Which CSS property rounds the corners of an element?",
        options: ["corner-radius", "radius", "border-radius", "round"],
        answer: "border-radius"
    },
    {
        question: "Which CSS property rounds the corners of an element?",
        options: ["corner-radius", "radius", "border-radius", "round"],
        answer: "border-radius"
    },
];

const startScreen = document.getElementById("startScreen");
const quizScreen = document.getElementById("quizScreen");
const resultScreen = document.getElementById("resultScreen");

const startBtn = document.getElementById("startBtn");
const nextBtn = document.getElementById("nextBtn");
const restartBtn = document.getElementById("restartBtn");

const questionText = document.getElementById("questionText");
const questionNumber = document.getElementById("questionNumber");
const progressBar = document.getElementById("progressBar");
const options = document.getElementById("options");
const scoreText = document.getElementById("score");

const finalScore = document.getElementById("finalscore");
const percentage = document.getElementById("percentage");
const resultMessage = document.getElementById("resultMessage");
const resultTitle = document.getElementById("resultTitle");

let currentQuestion = 0;
let score = 0;

function startQuiz() {
    currentQuestion = 0;
    score = 0;

    startScreen.style.display = "none";
    resultScreen.style.display = "none";
    quizScreen.style.display = "block";

    showQuestions();
}

function showQuestions() {
    const question = questions[currentQuestion];

    questionNumber.textContent =
        `Question ${currentQuestion + 1} of ${questions.length}`;

    scoreText.textContent = `Score: ${score}`;

    progressBar.style.width =
        `${((currentQuestion + 1) / questions.length) * 100}%`;

    questionText.textContent = question.question;

    options.innerHTML = "";
    nextBtn.style.display = "none";

    question.options.forEach(option => {
        const button = document.createElement("button");

        button.className = "option";
        button.textContent = option;

        button.addEventListener("click", () => {
            selectAnswer(button, option);
        });

        options.appendChild(button);
    });
}

function selectAnswer(button, selected) {
    const question = questions[currentQuestion];

    const buttons = document.querySelectorAll(".option");

    buttons.forEach(button => {
        button.disabled = true;

        if (button.textContent === question.answer) {
            button.classList.add("correct");
        }
    });

    if (selected === question.answer) {
        score++;
    } else {
        button.classList.add("wrong");
    }

    scoreText.textContent = `Score: ${score}`;
    nextBtn.style.display = "block";
}

function nextQuestion() {
    currentQuestion++;

    if (currentQuestion < questions.length) {
        showQuestions();
    } else {
        showResult();
    }
}

function showResult() {
    quizScreen.style.display = "none";
    resultScreen.style.display = "block";

    const percent = Math.round(
        (score / questions.length) * 100
    );

    finalScore.textContent = `${score}/${questions.length}`;
    percentage.textContent = `${percent}%`;

    if (percent >= 80) {
        resultTitle.textContent = "Great job!";
        resultMessage.textContent =
            "You have a solid understanding of frontend basics.";
    } else if (percent >= 50) {
        resultTitle.textContent = "Good effort!";
        resultMessage.textContent =
            "You know the basics. Keep practicing!";
    } else {
        resultTitle.textContent = "Keep learning!";
        resultMessage.textContent =
            "Don't worry. Try again and see if you can beat your score.";
    }
}

function primeTela(){

    setTimeout(() => {
        alert("Comece a jogar!")
    },0);
    
}

startBtn.addEventListener("click", startQuiz);
nextBtn.addEventListener("click", nextQuestion);
restartBtn.addEventListener("click", startQuiz);
