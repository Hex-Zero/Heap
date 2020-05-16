const titleText = document.getElementById("title-text");
titleText.innerHTML = "New Text";
let rect = titleText.getBoundingClientRect();
let bodyTag = document.getElementById("body");
let line;
let lineSvg;

const drawLines = (index, parentNode) => {
  let parentRectangle = parentNode.getBoundingClientRect();
  let childRectangle = index.getBoundingClientRect();
  console.log(parentRectangle);
  console.log(childRectangle);

  lineSvg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  line = document.createElementNS("http://www.w3.org/2000/svg", "line");
  lineSvg.setAttribute("width", "100%");
  lineSvg.setAttribute("height", "100%");
  line.setAttribute("x1", childRectangle.x + childRectangle.width / 2);
  line.setAttribute("y1", childRectangle.y - childRectangle.height / 2);
  line.setAttribute("x2", parentRectangle.x + parentRectangle.width / 2);
  line.setAttribute("y2", parentRectangle.y - parentRectangle.height / 2);
  line.setAttribute("stroke", "rebeccapurple");
  line.setAttribute("stroke-width", "5");
  lineSvg.appendChild(line);
  bodyTag.appendChild(lineSvg);
};
const nodeArray = [];
const generateRandomArray = (amount = 12, min = 0, max = 9) => {
  const resultingArray = [];
  let node;
  let paragraph;
  let parentNode;
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

      nodeArray.push({
        paragraph: paragraph,
        parentNode: parentNode.firstChild,
      });
    }

    // console.log(paragraph.getBoundingClientRect());
    // console.log(titleText.getBoundingClientRect());
    isLeft = !isLeft;

    parentNode.appendChild(node);
  }
  return nodeArray;
};
generateRandomArray(63);
nodeArray.forEach((item) => drawLines(item.paragraph, item.parentNode));
