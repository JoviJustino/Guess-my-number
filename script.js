'use strict';


let secretNumber = Math.trunc(Math.random() * 20 ) + 1;
document.querySelector('.number').textContent = secretNumber

let score = 20
let highScore = 0


document.querySelector('.check').addEventListener('click', function(){
  const guess = Number(document.querySelector('.guess').value);
  
  
  if(score >= 1 ){
    console.log(score)
  
  //     **Não digitou um número**
    if(!guess){
      document.querySelector('.message').textContent = "No number 🚫"
      

      //     **Acertar o numero**
    } else if(guess === secretNumber){
        document.querySelector('.message').textContent = "You winn!! "
        document.querySelector('body').style.backgroundColor = '#60b347'
        document.querySelector('.number').style.width = '30rem'

        document.querySelector('.number').textContent = secretNumber

        if(score > highScore ){
          document.querySelector('.highScore').textContent = score;
        }

        //     **numero alto** 
    } else if(guess > secretNumber){
      if(score > 1){
      document.querySelector('.message'). textContent ='High number 🤔'
      score--;
      document.querySelector('.score').textContent = score; 
      } else{
        document.querySelector('.message').textContent = 'Game Over ☠ '
        document.querySelector('.score').textContent = '0'

      }

      //     **numero baixo** 
    } else if (guess < secretNumber){
      if(score > 1){
        document.querySelector('.message').textContent = ' Low number 🤯'
        score--;
      document.querySelector('.score').textContent = score; 
      } else{
        document.querySelector('.message').textContent = 'Game Over ☠ '
        document.querySelector('.score').textContent = '0'
      }
    }
  }
  document.querySelector('.again').addEventListener('click', function(){
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20 ) + 1;

    document.querySelector('.message').textContent = 'Start guessing...';
    document.querySelector('.score').textContent = 20;

    //document.querySelector('.number').textContent = '?';
    document.querySelector('.number').textContent = secretNumber;
    
    document.querySelector('.guess').value = ' ';
    
    document.querySelector('body').style.backgroundColor = '#222';

  })














})