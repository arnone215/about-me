'use strict';
console.log('hello world');


//get user name and offer greeting
var username = prompt('What is your name?');
alert('hello ' + username + ' nice to meet you');
// write 5 questions. they must accept y or n OR yes or no in  ANY CASE

var answerOne = prompt('Do you think I live in Washington state?').toLowerCase();
//or
//var normalizedQu = questionOne.toLowerCase();

if (answerOne === 'yes' || answerOne === 'y') {
  //console.log('Nope, one state lower');
  alert('Nope, one state lower');
} else if (answerOne === 'no' || answerOne === 'n') {
  alert('Good guess');
} else {
  alert('ummmm...weird answer');
}

var answerTwo = prompt('Do you think I have a dog?').toLowerCase();

if (answerTwo === 'yes' || answerTwo === 'y') {
  //console.log('Yea! Of course I do! I have a wonderful old boy named Eazy-E');
  alert('Yea! Of course I do! I have a wonderful old boy named Eazy-E');
} else if (answerTwo === 'no' || answerTwo === 'n') {
  alert('What do you think I am, a monster? Just so you know, I have a dog named Eazy-E');
} else {
  alert('are you paying attention to the questions?');
}

var answerThree = prompt('Do you think Eazy is a good boy?').toLowerCase();

if (answerThree === 'yes' || answerThree === 'y') {
  //console.log('What insight! He really is. You must really know dogs!');
  alert('What insight! He really is. You must really know dogs!');
} else if (answerThree === 'no' || answerThree === 'n') {
  alert('Well, you must be alot of fun at parties. Why would you say that? Eazy is a very good boy!');
} else {
  alert('Ok, you definitely are not paying attention');
}

var answerFour = prompt('Do you think I have any kids?').toLowerCase();

if (answerFour === 'yes' || answerFour === 'y') {
  //console.log('Nope, no kids for me');
  alert('Nope, no kids for me');
} else if (answerFour === 'n' || answerFour === 'no') {
  alert('Very good.');
} else {
  alert('looks like someone is just pressing random buttons');
}

var answerFive = prompt('Ok, lets see if you have been paying attention. Do I have more children than dogs?').toLowerCase();

if (answerFive === 'yes' || answerFive === 'y') {
  //console.log('No, no, no, no. you must not be too great at math, because I know you wouldnt just skip through my questions');
  alert('No, no, no, no. you must not be too great at math, ' + username + ' because I know you wouldnt just skip through my questions');
} else if (answerFive === 'no' || answerFive === 'n') {
  alert('Wonderful, ' + username + '! You have an attention span of at least 4 questions!');
} else {
  alert(username + ' , you are hopeless');
}

