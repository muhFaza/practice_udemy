const form = document.querySelector("#form")
const ul = document.querySelector("ul")

form.addEventListener("submit", function (e) {
    e.preventDefault()

    // create li
    const li = document.createElement("li")
    // create bold element
    const bold = document.createElement("b")
    bold.innerText = this.user.value
    bold.style.fontSize = '18px'
    // append bold into li
    li.appendChild(bold)
    li.innerHTML += ` - ${this.twit.value}`

    
    const img = document.createElement("img")
    img.src = 'https://cdn-icons-png.flaticon.com/512/1214/1214428.png'
    img.style.width = '13px'
    img.style.marginLeft = '14px'

    li.appendChild(img)
    
    ul.appendChild(li)
    // reset
    this.reset()

})

ul.addEventListener("click", function (e) {
    if (e.target.nodeName == 'IMG') e.target.parentElement.remove()
    console.dir(e.target.style);
    console.dir(e);
    console.dir(e.target);
})