var header = document.querySelector(".header");
var score = document.getElementById("score");
var submit= document.getElementById("submit");
var questionHeader = document.getElementById("questionHeader");
var option1 = document.getElementById("one");
var option2 = document.getElementById("two");
var option3 = document.getElementById("three");
var option4 = document.getElementById("four");
var answers = document.getElementById("answers");
var finalScore= document.getElementById("finalScore")
var questions = document.getElementById("questions");
var questBtn = document.querySelector(".questBtn");
var quizPage = document.getElementById("quizPage");
var results = document.getElementById("results");

var timer = document.getElementById("timer"); // Timer Variable 

// QUIZ QUESTIONS
var quizQuestions = [
  {
  "questionHeader" : " Javascript is an _________ language:", 
  "one" : "1. Object-Oriented",
  "two" : "2. Object-Based",
  "three":"3. Procedural",
  "four" :"4. None of the above",
  "correct" : "1. Object-Oriented",
  },{
  "questionHeader" : " The condition in an if / else statement is enclosed within ________.",
  "one" : "1. quotes",
  "two" : "2. curly brackets",
  "three":"3. parenthesis",
  "four":"4. square brackets",
  "correct" : "3. parenthesis",
  },{
  "questionHeader" : " Arrays in JavaScript can be used to store ________.",
  "one" : "1. numbers and strings",
  "two" : "2. other arrays",
  "three" : "3. booleans",
  "four" : "4. all of the above",
  "correct" : "4. all of the above",
  },{
   "questionHeader" : " String values must be enclosed within ________ when being assigned to variables",
   "one" : "1. commas",
   "two" : "2. curly brackets",
   "three" : "3. quotes",
   "four" : "4. parenthesis",
   "correct" : "3. quotes",
  },{
   "questionHeader" : "A very useful tool used for developing and debugging for printing content to the debugger is:",
   "one" : "1. JavaScript",
   "two" : "2. terminal / bash",
   "three" : "3. for loops",
   "four" : "4. console.log",
   "correct" : "4. console.log",
  },
]

var questionIndex = 0;
var startScore = 0; // Starting time 

 firstPage();

// First page 
function firstPage() {
  quizPage.style.display = "block"; // Shows Rules 
  header.style.display = "block"; // Shows Header
  questions.style.display = "none"; // Hide Quiz Questions Page
  results.style.display = "none";   // Hide result 
}
 
//Reset variables
function resetVariables() {
    startScore = 0; 
    questionIndex = 0;  
}

var questionIndex = 0;
var startScore = 0; // Starting time 
timer.textContent = "Time: " + startScore;

// START QUIZ 
function startQuiz() { 
quizPage.style.display = "none"; // Hide first page 
questions.style.display = "block"; // Show Quiz Page
results.style.display = "none";

secondsLeft = 80; // Timer Begins

  var timerInterval = setInterval(function() { 
    secondsLeft--;
    timer.textContent = "Time: " + secondsLeft;
    if (secondsLeft === 0 || quizQuestions.length === questionIndex) { 
      timer.textContent="Time Over!!!";
      clearInterval(timerInterval);
    }
  }, 1000);
}
// SHOW QUESTIONS
function showQuestions() {
  var q = quizQuestions[questionIndex];

  questionHeader.textContent = q.questionHeader;
  option1.textContent = q.one;
  option1.setAttribute("data-answer", q.one);
  option2.textContent = q.two;
  option2.setAttribute("data-answer", q.two);
  option3.textContent = q.three;
  option3.setAttribute("data-answer", q.three);
  option4.textContent= q.four;
  option4.setAttribute("data-answer", q.four);
}

// EventListeners when user click options 
showQuestions();
option1.addEventListener("click", function (event) {
  checkAnswer(event);
})
option2.addEventListener("click", function (event) {
  checkAnswer(event);
})
option3.addEventListener("click", function (event) {
  checkAnswer(event);
})
option4.addEventListener("click", function (event) {
  checkAnswer(event);
})

// checks if the Answer is correct
function checkAnswer(event) {
  event.preventDefault();

  var answer = event.currentTarget.dataset.answer;
  var correctAnswer = null;

  if (quizQuestions[questionIndex].correct === answer){
      correctAnswer = answer;
  }
  if (answer === correctAnswer) {
  answers.textContent = "Correct!"; 
  } else {
  answers.textContent = "Wrong!"; // deduct 15 secs
      secondsLeft -= 15
      if (secondsLeft < 0) {
          secondsLeft = 0;
      }
  }
   if (quizQuestions.length === questionIndex+1) {
      return; 
     }
  questionIndex++;
  showQuestions();
  }

submit.addEventListener("click", function() { 
  startQuiz()
})
resetVariables();
firstPage();

