
const titleText = document.getElementById("title-text")
titleText.innerHTML = "New Text"

let node = document.createElement("div")
node.appendChild(document.createTextNode("More text"))

titleText.appendChild(node)