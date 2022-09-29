const Music = document.getElementById('music')
const MusicBtn = document.getElementById('music-btn')
const music_container = document.getElementById('music-container')
const body = document.getElementById('body')
const ball = document.getElementById('ball')

document.getElementById('heading').innerHTML = 'Hello World! 🌏'

function toggleMusic() {
  Music.paused ? Music.play() : Music.pause()
  body.classList.toggle('blue-bg')
}
MusicBtn.addEventListener('click', toggleMusic)
function Animate() {
  let id = null
  let pos = 0
  clearInterval(id)
  id = setInterval(frame, 5)
  function frame() {
    if (pos == 350) {
      clearInterval(id)
    } else {
      pos++
      ball.style.bottom = pos + 'px'
      ball.style.right = pos + 'px'
    }
  }
}
