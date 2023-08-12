let h1 = document.querySelector('h1')
let button = document.querySelector('button')

button.addEventListener('click', () =>{
    document.body.style.background = `rgb(${randColor()}, ${randColor()}, ${randColor()})`
    h1.innerText = `${document.body.style.background} ${tooDark(document.body.style.background)}`
    tooDark(document.body.style.background) > 250 ? h1.style.color = 'black' : h1.style.color = 'white'
    button.innerText = `YEAYYYYYYY`
})

function tooDark (rgb, num = 0){
    rgb = rgb
            .slice(4, rgb.length-1)
            .split(', ')
            .forEach(x => num += parseInt(x));
    return num
}
// tooDark('rgb(244, 54, 154)')

function randColor (){
    return Math.floor(Math.random() * 255)
}