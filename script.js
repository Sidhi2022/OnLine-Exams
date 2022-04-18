let points = 0;
let currentQuestion = 0;

const questionEle = document.getElementById("questionEle");
const option1 = document.getElementById("option1");
const option2 = document.getElementById("option2");
const option3 = document.getElementById("option3");
const option4 = document.getElementById("option4");

const elementsArr = [option1, option2, option3, option4];

const questions = [
  {
    question: "Q.1) who is Radha?",
    options: [
      "lover of krishna",
      "A preety girl",
      "A lovely daughter",
      "Soul of Krishna",
    ],
    answer: "a",
  },
  {
    question: "Q.2) whose birthday Today",
    options: ["lokesh", "Krishna", "sonali", "Rajesh"],
    answer: "a",
  },
  {
    question: "Q.3) where is bhopal ?",
    options: ["cg", "mh", "mp", "up"],
    answer: "c",
  },
  {
    question: "Q.4) pm of india in 2022 ?",
    options: ["gandhi", "yogi", "atal", "modi"],
    answer: "d",
  },
  {
    question: "Q.5) what is node ?",
    options: ["run time", "compilor", "intterpirtor", "hardware"],
    answer: "a",
  },
];

window.addEventListener("load", () => questionUpdate());

const submitFn = () => {
  const choice = document.querySelector('input[name="option"]:checked').value;
  if (!choice) return alert("please choose the appropriate option");
  if (confirm("are u sure you want to submit ?") === false) return;
  choice == questions[currentQuestion].answer && points++;
  alert(`score-point: ${points}`);
  ++currentQuestion && questionUpdate();
};

const questionUpdate = () => {
  questionEle.innerText = questions[currentQuestion].question;
  for (let i = 0; i <= elementsArr.length - 1; i++)
    elementsArr[i].innerText = questions[currentQuestion].options[i];
};
