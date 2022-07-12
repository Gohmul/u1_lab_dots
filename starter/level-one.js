/*
 * DOTS: Level One
 *
 */

const ball = document.querySelector('.js-ball')
const scoreDisplay = document.querySelector('.js-score')
const levelWinner = document.querySelector('.level-winner')
let score = 0

// event listeners

ball.addEventListener('click', () => {
  score += 10
  scoreDisplay.innerText = score
  console.log(score)
  if (score >= 100) {
    levelWinner.style.opacity = 1
  }
})
