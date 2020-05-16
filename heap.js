// const titleText = document.getElementById("title-text");
// titleText.innerHTML = "New Text";
// let rect = titleText.getBoundingClientRect();
let bodyTag = document.getElementById("body");
let line;
let lineSvg;
let heapSize = document.createElement("input");
let testButton = document.createElement("button");
heapSize.setAttribute("id", "heap-size-input");
heapSize.setAttribute("type", "number");

let mainTag;
const createMainTag = () => {
  mainTag = document.createElement("main");
  mainTag.setAttribute("id", "main-tag");
  bodyTag.appendChild(mainTag);
};
createMainTag();

let heapSizeLabel = document.createElement("label");
heapSizeLabel.setAttribute("for", "heap-size-input");
heapSizeLabel.innerHTML = "Heap Size";
heapSizeLabel.setAttribute("id", "heap-size-label");
bodyTag.appendChild(heapSizeLabel);
testButton.setAttribute("id", "test-button");
testButton.innerHTML = "Test";
bodyTag.appendChild(heapSize);

bodyTag.appendChild(testButton);

let svgArray = [];

const drawLines = (index, parentNode) => {
  let parentRectangle = parentNode.getBoundingClientRect();
  let childRectangle = index.getBoundingClientRect();

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
  mainTag.appendChild(lineSvg);
  svgArray.push(lineSvg);
};

const removeTags = () => {
  if (document.getElementById("node-" + 0)) {
    bodyTag.removeChild(document.getElementById("node-" + 0));
  }
};

const removeSvgLines = () => {
  bodyTag.removeChild(mainTag);
  createMainTag();
};
const childAndParentArray = [];
let firstNode = "";

const generateRandomArray = (amount = 12, min = 0, max = amount) => {
  removeSvgLines();
  removeTags();
  nodeArray = [];
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
      parentNode = bodyTag;
      node.classList.remove("nodes");
      firstNode = node;
    } else {
      if (isLeft) {
        parentNode = document.getElementById(`node-${i / 2 - 0.5}`);
        node.classList.add("left");
      } else {
        parentNode = document.getElementById(`node-${i / 2 - 1}`);
        node.classList.add("right");
      }

      childAndParentArray.push({
        paragraph: paragraph,
        parentNode: parentNode.firstChild,
      });
    }

    isLeft = !isLeft;

    parentNode.appendChild(node);
  }
  svgArray = [];

  childAndParentArray.forEach((item) =>
    drawLines(item.paragraph, item.parentNode)
  );
};

heapSize.value = 28;
generateRandomArray(heapSize.value);

heapSize.addEventListener("change", () => generateRandomArray(heapSize.value));
testButton.addEventListener("click", () => {
  removeSvgLines();
});
