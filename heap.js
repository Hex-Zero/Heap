const titleText = document.getElementById("title-text");
titleText.innerHTML = "New Text";
let rect = titleText.getBoundingClientRect();
console.log(rect);

const generateRandomArray = (amount = 12, min = 0, max = 9) => {
  const resultingArray = [];
  let node;
  let paragraph;
  let parentNode;
  let rect;
  let isLeft = false;
  for (let i = 0; i < amount; i++) {
    node = document.createElement("div");
    paragraph = document.createElement("span");
    node.setAttribute("id", "node-" + i);
    node.setAttribute("class", "nodes");
    paragraph.setAttribute("class", "heap-number");

    paragraph.appendChild(
      //   document.createTextNode(Math.floor(Math.random() * (max - min + 1)) + min)
      document.createTextNode(i)
    );
    node.appendChild(paragraph);
    if (i == 0) {
      parentNode = titleText;
      node.classList.remove("nodes");
    } else {
      if (isLeft) {
        parentNode = document.getElementById(`node-${i / 2 - 0.5}`);
        node.classList.add("left");
      } else {
        parentNode = document.getElementById(`node-${i / 2 - 1}`);
        node.classList.add("right");
      }
    }
    console.log(paragraph.getBoundingClientRect());
    isLeft = !isLeft;

    parentNode.appendChild(node);
  }
};
generateRandomArray(16);
