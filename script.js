var minutesfortimer = 10;
let time = starting
 
function clickHandler(event){
  console.log('Button click');
}

const btn = document.querySelector('.btn');
btn.addEventListener('click',clickHandler);

function addEvent(el,type,handler) {
  el.attachEvent?
  el.attachEvent('on' + type, handler) :
  el.addEventListener(type, handler);
}

addEvent (btn,'click',function (Event)) {
  console.log('Button Clicked');
}

function Correct() {
    console.log("Correct");
}

function Incorrect() {
    console.log("Incorrect");
}

  //Change div that is displayed

document.getElementById('form').addEventListener("click", function(event){
  event.preventDefault()
});



//prevent defalt becuse of form make use of even listeners click event
//attach event listner to html buttons
//change buttons to radio buttons only for not submit button (I think its done)
//grab the value of of click events target
//make a object with correct awnsers (array?)
//logic to see if selected option is correct or incorrect
//maybe add next button to add div swap logic
//global scope of correct 
// us primitive events In JavaScript, a primitive (primitive value, primitive data type) is data that is not an object and has no methods or properties. There are 7 primitive data types: string, number, bigint, boolean, undefined, symbol, and null. google

function timer()Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
console.log(timer);

const QuestionArray = ['How would you use somthing from your html in JavaScript?','What must end any string in JavaScript?','What is the primart purpose of a function in Java Script?','Why do we need JavaScript at all and not just HTML or CSS?','What is another name for an array in JavaScript?','What is the basic purpose of creating an array?','What is the difference between Const and Var?']

const CorrectAnswers = ['Class or Id.','semicolon. ;','To create a complex or simple group of commands to achive an operation.','JavaScript helps us do tasks that would be considered complex to achive with just html and css.','A list.','To make a group of items that the programmer can pull from.','The scope of a var is functional scope while the scope of const is block scope.'];

function QuestionSwap(event){ document.getElementById('form').addEventListener('click',funtion(Event))};

