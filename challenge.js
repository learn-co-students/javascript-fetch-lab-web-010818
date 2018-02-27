const COUNTER = document.getElementById('counter')
const PAUSE = document.getElementById('pause')
const PLUS = document.getElementById('+')
const MINUS = document.getElementById('-')
const LIKE = document.getElementById('<3')
let LIKED_NUMBERS = {}
const LIKES_LIST = document.querySelector('ul.likes')
const SUBMIT = document.getElementById('comment-form')
const COMMENT_BOX = document.querySelector('input')
const COMMENTS_LIST = document.querySelector('#list')
PAUSE.addEventListener('click', pauseToggle)
SUBMIT.addEventListener("submit", addComment);
PLUS.addEventListener('click', addOneToTimer)
MINUS.addEventListener('click', subtractOneFromTimer)
LIKE.addEventListener('click', addLike)
let paused = false;

function addOneToTimer(){
  if (!paused){
    COUNTER.innerText = parseInt(COUNTER.innerText) + 1
  }
}
function subtractOneFromTimer(){
  if (!paused){
    COUNTER.innerText = parseInt(COUNTER.innerText) - 1
  }
}

function incrementTimer(){
  if (paused){
    setTimeout(incrementTimer, 300)
  } else {
    COUNTER.innerText = parseInt(COUNTER.innerText) + 1
    setTimeout(incrementTimer, 1000)
  }
}
incrementTimer();


function pauseToggle(){
  if (paused){
    PAUSE.innerText = 'pause'
    return paused = false
  } else {
    PAUSE.innerText = 'resume'
    return paused = true
  }
}

function addLike(){
  if (!paused){
    let number = COUNTER.innerText
    if (LIKED_NUMBERS[number]) {
      element = document.getElementById(`${number}`)
      LIKED_NUMBERS[number]++
      element.innerText = `${number} has been liked ${LIKED_NUMBERS[number]} times`
    } else {
      LIKED_NUMBERS[number] = 1;
      let element = document.createElement(`li`)
      element.id = number
      element.innerText = `${number} has been liked ${LIKED_NUMBERS[number]} times`
      LIKES_LIST.appendChild(element)
    }
  }
}

function addComment(e){
  e.preventDefault();
  if (!paused){
    let commentText = document.querySelector('input').value
    document.querySelector('input').value = ''
    newComment = document.createElement('p')
    newComment.innerText = commentText
    COMMENTS_LIST.appendChild(newComment)
  }
}
