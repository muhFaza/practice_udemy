const form = document.querySelector("#form")
const p1 = form.querySelector('#p1')
const p2 = form.querySelector('#p2')
const select = form.querySelector('#select')

form.addEventListener('click', function (e) {
    e.preventDefault()
    
    // what the buttons do
    if (e.target.id == 'btn1') p1.innerText = +p1.innerText + 1
    else if (e.target.id == 'btn2') p2.innerText = +p2.innerText + 1
    else if (e.target.id == 'btnr') {
        p1.innerText = 0
        p2.innerText = 0
        this.btn1.disabled = false
        this.btn2.disabled = false
        p1.style.color = ''
        p2.style.color = ''
    }

    // checks if p1/p2 reached the goal
    if (+p1.innerText >= select.value || +p2.innerText >= select.value) {
        this.btn1.disabled = true
        this.btn2.disabled = true

        // assign color to winner, loser or draw
        if (+p1.innerText == +p2.innerText){
            p1.style.color = 'grey'
            p2.style.color = 'grey'
        }
        else if (+p1.innerText > +p2.innerText) {
            p1.style.color = 'green'
            p2.style.color = 'red'
        }
        else {
            p1.style.color = 'red'
            p2.style.color = 'green'
        }

        console.log('first check');
    }
})

