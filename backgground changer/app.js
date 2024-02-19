const button = document.querySelector("button");
const body = document.querySelector("body");
const color = ['red','blue','pink','orange','green','white','gold']

button.addEventListener('click', (changeB) => {
    const colourIndex = parseInt(Math.random()*color.length)
    body.style.backgroundColor = color[colourIndex]
})