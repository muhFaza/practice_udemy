const form = document.querySelector("#form")
const p1 = form.querySelector('#p1')
const p2 = form.querySelector('#p2')
const select = form.querySelector('#select')

form.addEventListener('click', function (e) {
    e.preventDefault()
    // console.log(e);
    // console.log(e.target.id == 'btn1');
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
    if (p1.innerText == select.value || p2.innerText == select.value) {
        this.btn1.disabled = true
        this.btn2.disabled = true
        if (p1.innerText == select.value) {
            p1.style.color = 'green'
            p2.style.color = 'red'
        }
        else if (p2.innerText == select.value) {
            p1.style.color = 'red'
            p2.style.color = 'green'
        }
    }
})