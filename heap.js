
const titleText = document.getElementById("title-text")
titleText.innerHTML = "New Text"

let node = document.createElement("div")
node.setAttribute("id","node1")
node.appendChild(document.createTextNode("More text"))

titleText.appendChild(node)
node.appendChild(node)