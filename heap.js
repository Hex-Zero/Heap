const titleText = document.getElementById("title-text");
titleText.innerHTML = "New Text";

const generateRandomArray = (amount = 12, min = 0, max = 9) => {
  const resultingArray = [];
  let node;
  let parentNode;
  let isLeft = false;
  for (let i = 0; i < amount; i++) {
    node = document.createElement("div");
    node.setAttribute("id", "node-" + i);
    node.setAttribute("class", "nodes");
    node.appendChild(
      //   document.createTextNode(Math.floor(Math.random() * (max - min + 1)) + min)
      document.createTextNode(i)
    );
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

    isLeft = !isLeft;

    parentNode.appendChild(node);
  }
};
generateRandomArray(50);
