//Write your code here
function createDiv(width, height, text) {
    let box = document.createElement("div");

    box.style.width = width + "px";
    box.style.height = height + "px";
    box.style.border = "2px solid black";
    box.style.backgroundColor = "lightyellow";

    box.textContent = text;

    let parent = document.getElementById("container");
    parent.appendChild(box);
    
}


// Do not change this code
Window.createDiv = createDiv;
createDiv(200, 100, "Hello HashedBit");