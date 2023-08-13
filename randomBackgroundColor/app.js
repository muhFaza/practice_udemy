let h1 = document.querySelector('h1')
let button = document.querySelector('button')
let saved = document.createElement('button')
let savedRgb = ''


button.addEventListener('click', (evt) =>{
    if (button.nextElementSibling.localName === 'script'){
        saved.id = 'saved1'
        saved.innerText = 'Save this color!'
        button.style.display = 'block'
        button.style.margin = '20 auto'
        button.parentElement.insertBefore(saved, button.nextElementSibling)
        let saved1 = document.querySelector('#saved1')
        saved1.addEventListener('click', function (evt) {
            if (savedRgb != ''){
                document.body.style.background = savedRgb
                h1.innerText = savedRgb
                this.innerText = 'Saved Color'
            } 
            savedRgb = document.body.style.background
        })
    }
    changeColor();
})



document.body.addEventListener('keydown', function (evt){
    if (evt.code == 'Space') changeColor();
})

function changeColor () {
    document.body.style.background = `rgb(${randColor()}, ${randColor()}, ${randColor()})`
    h1.innerText = document.body.style.background
    tooDark(document.body.style.background) > 250 ? h1.style.color = 'black' : h1.style.color = 'white'
}

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