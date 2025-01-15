// List of colors
const colors = ["red", "blue", "green", "yellow", "orange", "purple", "pink", "teal", "lime", "cyan"];

// List of inner shapes and their corresponding classes
const shapes = [
    "triangle",
    "square",
    "circle-shape",
    "rectangle",
    "diamond",
    "star",
    "hexagon",
    "pentagon",
    "parallelogram",
    "arrow",
    "heart",
    ];


// Get DOM elements
const shape = document.getElementById("shape");
const innerShape = document.getElementById("inner-shape");
const changeColorButton = document.getElementById("changeColor");
const changeShapeButton = document.getElementById("changeShape");

// Function to change the background color of the outer circle
function changeColor() {
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    shape.style.backgroundColor = randomColor;
}

// Function to change the inner shape
function changeShape() {
    // Remove all existing shape classes
    innerShape.className = "";

    // Add a new random shape class
    const randomShape = shapes[Math.floor(Math.random() * shapes.length)];
    innerShape.classList.add(randomShape);
}

// Add event listeners to buttons
changeColorButton.addEventListener("click", changeColor);
changeShapeButton.addEventListener("click", changeShape);
