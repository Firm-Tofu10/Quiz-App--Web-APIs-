var subbmitQuiz = document.getElementById('StartSubmit')
var cycleQuestions
var minutesfortimer = 10;
let timeCount = 100;
let timerObj;
var container = document.getElementById('article')
container.style.display = "none"
var CurrentQuestion = 0;
var awnser1 = document.getElementById('ButtonA')
var awnser2 = document.getElementById('ButtonB')
var awnser3 = document.getElementById('ButtonC')
var awnser4 = document.getElementById('ButtonD')
var question = document.getElementById('Qdisplay')
var selection = document.getElementsByName('selection')
var score = 0
var timerElement = document.getElementById('timer')
// selection.addEventListener()

function clickHandler(event) {
  console.log('Button click', event);
}

function Correct() {
  console.log("Correct");
}

function Incorrect() {
  console.log("Incorrect");
}

//Change div that is displayed

document.getElementById('form').addEventListener("submit", function (event) {
  event.preventDefault()
  let userSelection = document.getElementsByName("selection")
  userSelection.forEach(function (option) {
    console.log(option.tagName)
    console.log(option.getAttribute("data-value"), option.getAttribute("value"), option.checked)
    if (option.checked) {
      if (option.getAttribute("data-value") == questionsArray[CurrentQuestion].correctAnswer) {
        score += 10;
      }
    } else {
      results()
    }
  })
  if (CurrentQuestion < questionsArray.length - 1) {
    CurrentQuestion++
    pushQuestion()
  }
  else {
    console.log(score)
  }
});

function results() {
  container.style.display = "none";
  clearInterval(timerObj)
}

console.log(timer);

let questionsArray = [
  {
    questionText: "How would you use somthing from your html in JavaScript?",
    possibleAnswers: ["I have a chicken", "Class or ID", "3", "4"],
    correctAnswer: 1
  },
  {
    questionText: "What must end any string in javascript?",
    possibleAnswers: ["Vanilla", "semicolon", "3", "4"],
    correctAnswer: 1
  },
  {
    questionText: "What is the primart purpose of a function in Java Script?",
    possibleAnswers: ["To Create a complex or simple group of commands to achive an operation.", "2", "3", "4"],
    correctAnswer: 0
  },
  {
    questionText: "Why do we need JavaScript at all and not just HTML or CSS?",
    possibleAnswers: ["JavaScript helps us do tasks that would be considered complex to achive with just html and css.", "2", "3", "4"],
    correctAnswer: 0
  },
  {
    questionText: "What is another name for an array in JavaScript?",
    possibleAnswers: ["1", "2", "A list.", "4"],
    correctAnswer: 2
  },
  {
    questionText: "What is the basic purpose of creating an array?",
    possibleAnswers: ["1", "2", "3", "To make a group of items that the programmer can pull from."],
    correctAnswer: 3
  },
  {
    questionText: "What is the difference between Const and Var?",
    possibleAnswers: ["The scope of a var is functional scope while the scope of const is block scope.", "2", "3", "4"],
    correctAnswer: 0
  }
]



subbmitQuiz.addEventListener('click', function () {
  container.style.display = "block";
  subbmitQuiz.style.display = "none";
  console.log("text");
  // timerObj = setInterval(() => {
  // timerElement.textContent =  "Time:"+timeCount  
  // if(timeCount>1){
  //   timeCount--
  // }lelse
  // {
  //   results()
  // }
  // }, 1000);
  pushQuestion();
})

function pushQuestion() {
  question.textContent = questionsArray[CurrentQuestion].questionText
  awnser1.textContent = questionsArray[CurrentQuestion].possibleAnswers[0]
  awnser2.textContent = questionsArray[CurrentQuestion].possibleAnswers[1]
  awnser3.textContent = questionsArray[CurrentQuestion].possibleAnswers[2]
  awnser4.textContent = questionsArray[CurrentQuestion].possibleAnswers[3]
  console.log("display", questionsArray[CurrentQuestion])
}
