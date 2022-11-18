const data = [
  {
    id: 1,
    question: "What of these fish is actually a fish?",
    answers: [
      {
        answer: "swordfish",
        isCorrect: true,
      },
      {
        answer: "jellyfish",
        isCorrect: false,
      },
      {
        answer: "starfish",
        isCorrect: false,
      },
      {
        answer: "crayfish",
        isCorrect: false,
      },
    ],
  },
  {
    id: 2,
    question: "A flutter is a group of: ",
    answers: [
      {
        answer: "bees",
        isCorrect: false,
      },
      {
        answer: "penguins",
        isCorrect: false,
      },
      {
        answer: "butterflies",
        isCorrect: true,
      },
      {
        answer: "camels",
        isCorrect: false,
      },
    ],
  },
  {
    id: 3,
    question: "A group of which anima is referred to as a wake? ",
    answers: [
      {
        answer: "bats",
        isCorrect: false,
      },
      {
        answer: "vultures",
        isCorrect: false,
      },
      {
        answer: "ants",
        isCorrect: true,
      },
      {
        answer: "doggs",
        isCorrect: false,
      },
    ],
  },
];

const gameScreen = document.querySelector(".game");
const resultScreen = document.querySelector(".result");
const question = document.querySelector(".question");
const answersContainer = document.querySelector(".answers");
const play = document.querySelector(".play");
const submit = document.querySelector(".submit");

let qIndex = 0;
let correctCount = 0;
let wrongCount = 0;
let score = 0;
let selectedAnswer;

//reset the game
const restartGame = () => {
  qIndex = 0;
  correctCount = 0;
  wrongCount = 0;
  score = 0;
  showQuestion(qIndex);
};

play.addEventListener("click", () => {
  resultScreen.style.display = "none";
  gameScreen.style.display = "block";
  restartGame();
});

const showResult = () => {
  resultScreen.style.display = "block";
  gameScreen.style.display = "none";

  resultScreen.querySelector(
    ".correct"
  ).textContent = `Correct Answers: ${correctCount}`;

  resultScreen.querySelector(
    ".wrong"
  ).textContent = `Wrong Answers: ${wrongCount}`;

  resultScreen.querySelector(".score").textContent = `Score: ${
    (correctCount - wrongCount) * 10
  }`;
};

const showQuestion = (qNumber) => {
  if (qIndex === data.length) return showResult();
  selectedAnswer = null;
  question.textContent = data[qNumber].question;
  answersContainer.innerHTML = data[qNumber].answers
    .map(
      (item, i) =>
        `
        <div class="answer">
            <input name="answer" type="radio" id="${i}" value="${item.isCorrect}">
            <label for="${i}">${item.answer}</label>
        </div>
    `
    )
    .join("");
  selectAnswer();
};

const selectAnswer = () => {
  answersContainer.querySelectorAll("input").forEach((elm) => {
    elm.addEventListener("click", (e) => {
      selectedAnswer = e.target.value;
    });
  });
};

const submitAnswer = () => {
  submit.addEventListener("click", () => {
    if (selectedAnswer !== null) {
      selectedAnswer === "true" ? correctCount++ : wrongCount++;
      qIndex++;
      showQuestion(qIndex);
    } else alert("Select an answer!");
  });
};

showQuestion(qIndex);
submitAnswer();
