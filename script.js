'use strict';
let secretNumber = Math.trunc((Math.random() * 20)) + 1; //generate random number
let score=20;
let highScore=0;
// the function here is event handler 
document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);
    //when there is no input
    if (!guess) {
        document.querySelector('.message').textContent = ' ⛔No Number';
    }
    //when player wins
    else if (guess === secretNumber) {
        document.querySelector('.message').textContent =
            '🎉Correct Number!';
        document.querySelector('body').style.backgroundColor ='green';
        document.querySelector('.number').style.width='25rem';
        document.querySelector('.number').textContent = secretNumber;
        if (score>highScore){
            highScore=score;
            document.querySelector('.highscore').textContent=highScore;
        }


    }
    //when guess is too high
    else if (guess > secretNumber){
        if (score>1){
        document.querySelector('.message').textContent =
            '📈too high!';
        score--;
        document.querySelector('.score').textContent=score;
    }
    else   {
        document.querySelector('.message').textContent=
        '😞 You lost the game';
        document.querySelector('.score').textContent=0;
        document.querySelector('body').style.backgroundColor ='red';
        document.querySelector('.number').style.widht='20rem';

    }
} 
//when guess is too low
    else {
        if (score>1){
        document.querySelector('.message').textContent =
            '📉too low!';
        score--;
        document.querySelector('.score').textContent=score;
    }
    else   {
        document.querySelector('.message').textContent=
        '😞 You lost the game';
        document.querySelector('.score').textContent=0;
        document.querySelector('body').style.backgroundColor ='red';
        document.querySelector('.number').style.widht='20rem';

    }
}

})
document.querySelector('.again').addEventListener('click',function(){
   score=20;
   secretNumber=Math.trunc((Math.random() * 20)) + 1;
   document.querySelector('.message').textContent='Start guessing...';
  document.querySelector('.score').textContent=score;
  document.querySelector('body').style.backgroundColor ='black';
  document.querySelector('.number').style.widht='10rem';
  document.querySelector('.number').textContent='?';
  document.querySelector('.guess').value='';


})

