const form = document.querySelector("#thisContent")
const p1 = form.querySelector('#p1')
const p2 = form.querySelector('#p2')
const select = form.querySelector('#select')
btn1 = form.querySelector('#btn1')
btn2 = form.querySelector('#btn2')
btnr = form.querySelector('#btnr')

form.addEventListener('click', function (e) {
    e.preventDefault()
    console.log(e.target.id);
    
    // what the buttons do
    if (e.target.id == 'btn1') p1.innerText = +p1.innerText + 1
    else if (e.target.id == 'btn2') p2.innerText = +p2.innerText + 1
    else if (e.target.id == 'btnr') {
        p1.innerText = 0
        p2.innerText = 0
        btn1.disabled = false
        btn2.disabled = false
        p1.classList.remove('has-text-primary', 'has-text-danger', 'has-text-grey-light')
        p2.classList.remove('has-text-primary', 'has-text-danger', 'has-text-grey-light')
    }

    // checks if p1/p2 reached the goal
    if (+p1.innerText >= select.value || +p2.innerText >= select.value) {
        btn1.disabled = true
        btn2.disabled = true

        // assign color to winner, loser or draw
        if (+p1.innerText == +p2.innerText){
            p1.classList.add('has-text-grey-light')
            p2.classList.add('has-text-grey-light')
        }
        else if (+p1.innerText > +p2.innerText) {
            p1.classList.add('has-text-primary')
            p2.classList.add('has-text-danger')
        }
        else {
            p2.classList.add('has-text-primary')
            p1.classList.add('has-text-danger')
        }
    }
})

