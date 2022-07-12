/*
 * DOTS: Level Three
 *
 */

const ball = document.querySelectorAll('.js-ball')
const scoreDisplay = document.querySelector('.js-score')
const levelWinner = document.querySelector('.level-winner')
let score = 0
let ballValue
for (let i = 0; i < ball.length; i++) {
  ball[i].addEventListener('click', function () {
    ballValue = ball[i].getAttribute('data-increment')
    score += parseInt(ballValue)
    console.log(score)
    scoreDisplay.innerText = score
    if (score >= 100) {
      levelWinner.style.opacity = 0.9
    }
  })
}
