// without object 
let title = 'Where is the capital of Jordan';
let options = ['Tashkent', 'Amaan', 'Kuwait City', 'New Delhi'];
let correctAnswerIndex = 1;

function isAnswerCorrect(index){
    return index === correctAnswerIndex;
}

function getCorrectAnswer(){
    return options[correctAnswerIndex];
}

isAnswerCorrect(1);
getCorrectAnswer();


// With Object
let question ={
    title : 'Where is the capital of Jordan',
 options : ['Tashkent', 'Amaan', 'Kuwait City', 'New Delhi'],
 correctAnswerIndex : 1,
  isAnswerCorrect = function (choice) {
    return choice === question.correctAnswerIndex;
  },
  getCorrectAnswer = function () {
    return question.options[correctAnswerIndex];
  },
}

question.isAnswerCorrect(1);
question.getCorrectAnswer();


// by creationg object and using function
function createQuestions(title, options, correctAnswerIndex) {
  let question = {};
    question.title = title,
    question.options = options,
    question.correctAnswerIndex = correctAnswerIndex;
    question.isAnswerCorrect = function (choice) {
    return choice === question.correctAnswerIndex;
  };
    question.getCorrectAnswer = function () {
    return question.options[correctAnswerIndex];
  };
    return question;
}
//test
const question1 = createQuestions(
    'Where is the capital of Jordan?',
    ['Tashkent', 'Amaan', 'Kuwait City', 'New Delhi'],
    1
);

const question1 = createQuestions(
    'Where is the capital of India?',
    ['Tashkent', 'Amaan', 'Kuwait City', 'New Delhi'],
    3
);


//  Using this keyword
function createQuestions(title, options, correctAnswerIndex) {
  let question = {};
  question.title = title,
  question.options = options,
  question.correctAnswerIndex = correctAnswerIndex;
  question.isAnswerCorrect = function (choice) {
    return choice === this.correctAnswerIndex;
  };
  question.getCorrectAnswer = function () {
    return this.options[this.correctAnswerIndex];
  };
  return question;
}


// test
const question1 = createQuestions(
    'Where is the capital of Jordan?',
    ['Tashkent', 'Amaan', 'Kuwait City', 'New Delhi'],
    1
);

const question1 = createQuestions(
    'Where is the capital of India?',
    ['Tashkent', 'Amaan', 'Kuwait City', 'New Delhi'],
    3
);