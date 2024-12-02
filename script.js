let userName = prompt('Hello, What is your Name?')

let responseImg = document.getElementById('response-img')
let responseText = document.getElementById('response-text')
let greeting = document.getElementById('greeting')



userName ? document.getElementById('greeting').innerHTML=`Hello, ${userName}`
 : document.getElementById('greeting').innerHTML='Hello Stranger!'



function shakeMagic8Ball(){
//Get User Question//
let userQuestion = prompt('What do you want to ask the 8 Ball?')
// DO NOT TOUCH THIS CODE//
let randomNumber = Math.floor(Math.random() * 8);

let eightBall = ''
let imageChoice = ''

switch (randomNumber) {
  case 0:
    eightBall = 'It is certain'
    imageChoice = 'imgs/certain.jpg'
    break;
  case 1:
    eightBall = 'It is decidedly so'
     imageChoice = 'imgs/decidedly.gif'
    break;
  case 2:
    eightBall = 'Reply hazy try again'
     imageChoice = 'imgs/hazy.png'
    break;
  case 3:
    eightBall = 'Cannot predict now'
     imageChoice = 'imgs/cannnot.png'
    break;
  case 4:
    eightBall = 'Do not count on it'
     imageChoice = 'imgs/dont count.webp'
    break;
  case 5:
    eightBall = 'My sources say no'
     imageChoice = 'imgs/my sources.png'
    break;
  case 6:
    eightBall = 'Outlook not so good'
     imageChoice = 'imgs/outlook.gif'
    break;
  case 7:
    eightBall = 'Signs point to yes'
     imageChoice = 'imgs/point to yes.jpg'
    break;

default:
eightBall = 'Error'
}
console.log(eightBall)

document.getElementById('response-text').innerText = `${userName} has asked ${userQuestion} to the almighty 8 Ball. The 8 ball has replied ${eightBall}!`

responseImg.src = imageChoice
}
