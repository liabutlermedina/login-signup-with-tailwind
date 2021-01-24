import "./styles.css.proxy.js";

//...............................................................................................
//Password Viewer

const eye = document.querySelector('#eye')
const eyeOff = document.querySelector('#eyeOff')
const password = document.querySelector('#password')

eye.addEventListener('click',(e) => {
  if (eyeOff.classList.contains('hidden')){
    eyeOff.classList.remove('hidden')
    eye.classList.add('hidden')
    password.type = 'text'
  }
})

eyeOff.addEventListener('click',(e) => {
  if (eye.classList.contains('hidden')){
    eye.classList.remove('hidden')
    eyeOff.classList.add('hidden')
    password.type = 'password'

  }
})

//...............................................................................................
// Switch Theme

const html = document.querySelector ('html')
const moon = document.querySelector('#moon')
const sun = document.querySelector('#sun')

moon.addEventListener('click',(e) => {
  html.classList.toggle('dark')
})

sun.addEventListener('click',(e) => {
  html.classList.toggle('dark')
})

//...............................................................................................
// Links 

const links = document.querySelector('#links')
const logo = document.querySelector('#logo')

logo.addEventListener('click',(e) => {
  links.classList.contains('hidden') ? 
  links.classList.remove('hidden') :
  links.classList.add('hidden')
})

//...............................................................................................
// Logo animation

logo.addEventListener('click',(e) => {
  logo.classList.remove('animate-bounce')
})