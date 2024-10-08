let socialAnswers = [];
let thoughtAnswers = [];
let emotionAnswers = [];
let insightAnswers = [];

let personalityType = '';


function socialQuestions() {
    let socialAnswer;
    alert('Answer the following questions by typing a number between 0 and 5.  0 is disagree and 5 is agree.')
    socialAnswer = prompt('I like parties'); // extravert vs introvert
    socialAnswers.push(socialAnswer);
    socialAnswer = prompt("I feel comfortable in groups");
    socialAnswers.push(socialAnswer);
    socialAnswer = prompt("I get my energy from other people");
    socialAnswers.push(socialAnswer);
    console.log(socialAnswers);
}

function thoughtQuestions() {
    let thoughtAnswer;
    thoughtAnswer = prompt('When learning new things I prefer facts, details, and practical applications over abstract ideas and theories'); // sensing vs intuition
    thoughtAnswers.push(thoughtAnswer);
    thoughtAnswer = prompt("When solving a problem I tend to focus on the present situation and rely on past experiences instead of considering the future and creating new approaches");
    thoughtAnswers.push(thoughtAnswer);
    thoughtAnswer = prompt("When recalling an event I remember specific facts and details rather than the broader implications of the event");
    thoughtAnswers.push(thoughtAnswer);
    console.log(thoughtAnswers);
}

function emotionQuestions() {
    let emotionAnswer;
    emotionAnswer = prompt('When making decisions I focus on logic more than the impact the decision will have on other people'); // thinking vs feeling
    emotionAnswers.push(emotionAnswer);
    emotionAnswer = prompt("In a disagreement I usually prioritize finding a fair and rational solution over striving to maintain harmony and understanding others' feelings");
    emotionAnswers.push(emotionAnswer);
    emotionAnswer = prompt("When giving feedback I tend to be direct and straightforward rather than tactful and considerate");
    emotionAnswers.push(emotionAnswer);
    console.log(emotionAnswers);
}

function insightQuestions() {
    let insightAnswer;
    insightAnswer = prompt('When planning my day I stick to a schedule rather than going with the flow'); // judge vs perceive
    insightAnswers.push(insightAnswer);
    insightAnswer = prompt("When faced with a new project I plan clear deadlines rather than starting once inspiration strikes");
    insightAnswers.push(insightAnswer);
    insightAnswer = prompt("In my daily life I like to be organized and settled instead of flexibile and adaptable");
    insightAnswers.push(insightAnswer);
    console.log(insightAnswers);
    alert('Thank you');
}

function getCategoryValues() {

    socialQuestions();
    thoughtQuestions();
    emotionQuestions();
    insightQuestions();

    let socialFinalValue = socialAnswers.reduce((acc, curr) => acc + Number(curr), 0) / 15;
    console.log(socialFinalValue);

    let thoughtFinalValue = thoughtAnswers.reduce((acc, curr) => acc + Number(curr), 0) / 15;
    console.log(thoughtFinalValue);

    let emotionFinalValue = emotionAnswers.reduce((acc, curr) => acc + Number(curr), 0) / 15;
    console.log(emotionFinalValue);

    let insightFinalValue = insightAnswers.reduce((acc, curr) => acc + Number(curr), 0) / 15;
    console.log(insightFinalValue);

    getPersonalityType(socialFinalValue, thoughtFinalValue, emotionFinalValue, insightFinalValue);
    
}

function getPersonalityType(social, thought, emotion, insight) {
    if (social >= 0.5) {
        personalityType = 'E';
    }
    else {
        personalityType = 'I';
    }

    if (thought >= 0.5) {
        personalityType += 'S';
    }
    else {
        personalityType += 'N';
    }

    if (emotion >= 0.5) {
        personalityType += 'T';
    }
    else {
        personalityType += 'F';
    }

    if (insight >= 0.5) {
        personalityType += 'J';
    }
    else {
        personalityType += 'P';
    }

    alert('Your personality type is ' + personalityType);
}

getCategoryValues();




const questions = [
    {
        question: "I like parties",
        answers: [
            { text: "Strongly Disagree", correct: true },
            { text: "Disagree", correct: false },
            { text: "Unsure", correct: false },
            { text: "Agree", correct: false },
            { text: "Strongly Agree"}
        ]
    },
    {
        question: "I feel comfortable in groups",
        answers: [
            { text: "Strongly Disagree", correct: true },
            { text: "Disagree", correct: false },
            { text: "Unsure", correct: false },
            { text: "Agree", correct: false },
            { text: "Strongly Agree"}
        ]
    },
    {
        question: "I get my energy from other people",
        answers: [
            { text: "Strongly Disagree", correct: true },
            { text: "Disagree", correct: false },
            { text: "Unsure", correct: false },
            { text: "Agree", correct: false },
            { text: "Strongly Agree"}
        ]
    },
    {
        question: "When learning new things I prefer facts, details, and practical applications over abstract ideas and theories",
        answers: [
            { text: "Strongly Disagree", correct: true },
            { text: "Disagree", correct: false },
            { text: "Unsure", correct: false },
            { text: "Agree", correct: false },
            { text: "Strongly Agree"}
        ]
    },
    {
        question: "When solving a problem I tend to focus on the present situation and rely on past experiences instead of considering the future and creating new approaches",
        answers: [
            { text: "Strongly Disagree", correct: true },
            { text: "Disagree", correct: false },
            { text: "Unsure", correct: false },
            { text: "Agree", correct: false },
            { text: "Strongly Agree"}
        ]
    },
    {
        question: "When recalling an event I remember specific facts and details rather than the broader implications of the event",
        answers: [
            { text: "Strongly Disagree", correct: true },
            { text: "Disagree", correct: false },
            { text: "Unsure", correct: false },
            { text: "Agree", correct: false },
            { text: "Strongly Agree"}
        ]
    },
    {
        question: "When making decisions I focus on logic more than the impact the decision will have on other people",
        answers: [
            { text: "Strongly Disagree", correct: true },
            { text: "Disagree", correct: false },
            { text: "Unsure", correct: false },
            { text: "Agree", correct: false },
            { text: "Strongly Agree"}
        ]
    },
    {
        question: "In a disagreement I usually prioritize finding a fair and rational solution over striving to maintain harmony and understanding others' feelings",
        answers: [
            { text: "Strongly Disagree", correct: true },
            { text: "Disagree", correct: false },
            { text: "Unsure", correct: false },
            { text: "Agree", correct: false },
            { text: "Strongly Agree"}
        ]
    },
    {
        question: "When giving feedback I tend to be direct and straightforward rather than tactful and considerate",
        answers: [
            { text: "Strongly Disagree", correct: true },
            { text: "Disagree", correct: false },
            { text: "Unsure", correct: false },
            { text: "Agree", correct: false },
            { text: "Strongly Agree"}
        ]
    },
    {
        question: "When planning my day I stick to a schedule rather than going with the flow",
        answers: [
            { text: "Strongly Disagree", correct: true },
            { text: "Disagree", correct: false },
            { text: "Unsure", correct: false },
            { text: "Agree", correct: false },
            { text: "Strongly Agree"}
        ]
    },
    {
        question: "When faced with a new project I plan clear deadlines rather than starting once inspiration strikes",
        answers: [
            { text: "Strongly Disagree", correct: true },
            { text: "Disagree", correct: false },
            { text: "Unsure", correct: false },
            { text: "Agree", correct: false },
            { text: "Strongly Agree"}
        ]
    },
    {
        question: "In my daily life I like to be organized and settled instead of flexibile and adaptable",
        answers: [
            { text: "Strongly Disagree", correct: true },
            { text: "Disagree", correct: false },
            { text: "Unsure", correct: false },
            { text: "Agree", correct: false },
            { text: "Strongly Agree"}
        ]
    }
];

let currentQuestion = 0;
let score = 0;

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

function startQuiz() {
    currentQuestion = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion() {
    const question = questions[currentQuestion];
    questionElement.innerHTML = question.question;
    answerButtons.innerHTML = "";

    question.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        button.addEventListener("click", () => selectAnswer(answer));
        answerButtons.appendChild(button);
    });
}

function selectAnswer(answer) {
    if (answer.correct) {
        score++;
    }
    currentQuestion++;

    if (currentQuestion < questions.length) {
        showQuestion();
    } else {
        questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
        nextButton.innerHTML = "Play Again";
    }
}

nextButton.addEventListener("click", () => {
    if (currentQuestion < questions.length) {
        showQuestion();
    } else {
        startQuiz();
    }
});

startQuiz();