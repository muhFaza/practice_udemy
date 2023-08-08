let h1 = document.querySelector('h1')
let body = document.querySelector('body')
let button = document.querySelector('button')

button.addEventListener('click', () =>{
    let r = Math.floor(Math.random() * 255)
    let g = Math.floor(Math.random() * 255)
    let b = Math.floor(Math.random() * 255)
    body.style.background = `rgb(${r}, ${g}, ${b})`
    h1.innerText = `rgb(${r}, ${g}, ${b})`
    button.innerText = `YEAYYYYYYY`
})