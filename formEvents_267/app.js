const form = document.querySelector("#form")
const input = document.querySelector("#inputText")
const button = document.querySelector("#btn")
const list = document.querySelector("#petNames")

form.addEventListener ("submit", function (e) {
    e.preventDefault();
    const newLI = document.createElement("LI")
    // newLI.innerText = input.value
    newLI.append(input.value)
    newLI.className = "lists"
    list.appendChild(newLI)
    input.value = ''
})