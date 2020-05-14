
const titleText = document.getElementById("title-text")
titleText.innerHTML = "New Text"

const generateRandomArray = (amount = 10, min = 0, max = 10) =>{
    const resultingArray = []
    let node
    for(let i = 0; i < amount; i++){
       node = document.createElement("div")
        node.setAttribute("id","node-" + i)
        node.setAttribute("class","nodes")
        node.appendChild(document.createTextNode(Math.floor(Math.random() * ( max - min )) + min))
        resultingArray.push(node)
    }
    return resultingArray
}
generateRandomArray(5).forEach((value, index)=>{
    titleText.appendChild(value)

})

