//This starts the quizz.
var subbmitQuiz = document.getElementById('StartSubmit');
//This helps hide all the elements in my container at the end of the quizz to display the final results.
var container = document.getElementById('article');
container.style.display = "none";
//This sets the current quetion to 1 in the array of questions or 0 in js.
var CurrentQuestion = 0;
//This helps search for the current question.
var cycleQuestions;
//The awnser1-4 are all vars for the buttons on the page.
var awnser1 = document.getElementById('ButtonA');
var awnser2 = document.getElementById('ButtonB');
var awnser3 = document.getElementById('ButtonC');
var awnser4 = document.getElementById('ButtonD');
//This helps set were to display the question options.
var question = document.getElementById('Qdisplay');
var selection = document.getElementsByName('selection');
//Is used for styleing and make objects block,flex or none.
var Adisplay = document.getElementsByTagName('Adisplay');
//This sets the stating score to 0 on the page refresh.
var score = 0
var timerElement = document.getElementById('timer');
//Helps display final score as flex.
var finalScore = document.getElementById("final-score");
//Helps display final score calculation in the div.
var final = document.getElementById("final");
//clearInterval
let timerObj;


function clickHandler(event) {
  console.log('Button click', event);
}
//Display correct on correct anwser.
function Correct() {
  console.log("Correct");
}
//Display incorrect on incorrect anwser.
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
        score += 1; console.log(score); alert("Correct answer");
      }
			else { alert("Incorrect"); }
    } 
		else {
      results()
    }
  })
  if (CurrentQuestion < questionsArray.length - 1) {
    CurrentQuestion++
    pushQuestion()
  }
  else {
    article.style.display = "none";
		NextButton.style.display = "none";
		Qdisplay.style.display = "none";
		finalScore.style.display = "flex";
	  document.getElementById("final").innerHTML = score;
		console.log(score);
  }
});

function results() {
  container.style.display = "block";
  clearInterval(timerObj)
}

console.log(timer);

//Array of all the questions that are displayed.
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


//This function is used to start the quizz.
subbmitQuiz.addEventListener('click', function () {
  container.style.display = "block";
  subbmitQuiz.style.display = "none";
  console.log("text");
  pushQuestion();
})

//This function cycleQuestions in the order of the array.
function pushQuestion() {
  question.textContent = questionsArray[CurrentQuestion].questionText
  awnser1.textContent = questionsArray[CurrentQuestion].possibleAnswers[0]
  awnser2.textContent = questionsArray[CurrentQuestion].possibleAnswers[1]
  awnser3.textContent = questionsArray[CurrentQuestion].possibleAnswers[2]
  awnser4.textContent = questionsArray[CurrentQuestion].possibleAnswers[3]
  console.log("display", questionsArray[CurrentQuestion])
}``