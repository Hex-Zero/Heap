
const titleText = document.getElementById("title-text")
titleText.innerHTML = "New Text"




const generateRandomArray = (amount = 10, min = 0, max = 10) =>{
    const resultingArray = []
    let node
    for(let i = 0; i < amount; i++){
       node = document.createElement("div")
        node.setAttribute("id","node" + i)
        node.appendChild(document.createTextNode(Math.floor(Math.random() * max)))
        resultingArray.push(node)
    }
    return resultingArray
}
generateRandomArray().forEach((value, index)=>{
    console.log(value);

})

