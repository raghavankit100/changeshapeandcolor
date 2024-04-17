const colors = [
    "red",
    "green",
    "blue",
    "yellow",
    "purple",
    "orange",
    "cyan",
    "pink",
    "brown",
    "grey"
];

const shapes = [
    "triangle",
    "diamond",
    "circle",
    "square",
    "rectangle"
];

function changeColor() {
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.getElementById("shape").style.backgroundColor = randomColor;
}

function changeShape() {
    const randomShape = shapes[Math.floor(Math.random() * shapes.length)];
    switch (randomShape) {
        case "circle":
            document.getElementById("shape").style.borderRadius = "50%";
            break;
        case "square":
            document.getElementById("shape").style.borderRadius = "0";
            break;
        case "rectangle":
            document.getElementById("shape").style.borderRadius = "10%";
            break;
        case "triangle":
            document.getElementById("shape").style.borderRadius = "0";
            break;
        case "diamond":
            document.getElementById("shape").style.borderRadius = "50% 0 50% 0";
            break;
        default:
            break;
    }
}


