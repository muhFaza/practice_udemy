let h1 = document.querySelector('h1')
let button = document.querySelector('button')

button.addEventListener('click', () =>{
    document.body.style.background = `rgb(${randColor()}, ${randColor()}, ${randColor()})`
    h1.innerText = document.body.style.background 
    button.innerText = `YEAYYYYYYY`
})

function tooDark (){
    let rgb = document.body.style.background
    rgb.slice(4, rgb.length-1).split(', ')
    let sum = rgb.reduce( (x, 0) => x )

}

function randColor (){
    return Math.floor(Math.random() * 255)
}