let userName = prompt('Hello, What is your Name?')

userName ? document.getElementById('greeting').innerHTML=`Hello, ${userName}` : document.getElementById('greeting').innerHTML='Hello Stranger!'



function shakeMagic8Ball(){
//Get User Question//
let userQuestion = 'Are you good at basketball?'
userQuestion ? console.log(`${userName} asked, ${userQuestion}`) : console.log('No question asked.')
// DO NOT TOUCH THIS CODE//
let randomNumber = Math.floor(Math.random() * 8);

let eightBall = ''

switch (randomNumber) {
  case 0:
    eightBall = 'It is certain';
    break;
  case 1:
    eightBall = 'It is decidedly so';
    break;
  case 2:
    eightBall = 'Reply hazy try again';
    break;
  case 3:
    eightBall = 'Cannot predict now';
    break;
  case 4:
    eightBall = 'Do not count on it';
    break;
  case 5:
    eightBall = 'My sources say no';
    break;
  case 6:
    eightBall = 'Outlook not so good';
    break;
  case 7:
    eightBall = 'Signs point to yes';
    break;

default:
eightBall = 'Error'
}
console.log(eightBall)


}
