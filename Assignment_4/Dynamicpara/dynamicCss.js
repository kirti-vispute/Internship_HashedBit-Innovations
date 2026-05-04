const mainText = document.querySelector("#text-container");
const colourBox = document.querySelector("#colorbox");
const rangeBox = document.querySelector("#fontsize");
const cssResult = document.querySelector("#css-props");

document.querySelector("#colorchange").addEventListener("click", () => {
    mainText.style.color = colourBox.value;
});

rangeBox.addEventListener("input", () => {
    mainText.style.fontSize = `${rangeBox.value}px`;
});

document.querySelector("#italic").addEventListener("click", () => {
    mainText.style.fontStyle =
        mainText.style.fontStyle === "italic" ? "normal" : "italic";
});

document.querySelector("#underline").addEventListener("click", () => {
    mainText.style.textDecoration =
        mainText.style.textDecoration === "underline" ? "none" : "underline";
});

document.querySelector("#bold").addEventListener("click", () => {
    mainText.style.fontWeight =
        mainText.style.fontWeight === "bold" ? "normal" : "bold";
});

document.querySelector("#list").addEventListener("change", (event) => {
    mainText.style.fontFamily = event.target.value;
});

document.querySelector("#getstyle").addEventListener("click", () => {
    cssResult.textContent =
        `color: ${colourBox.value}; ` +
        `font-size: ${rangeBox.value}px; ` +
        `text-decoration: ${mainText.style.textDecoration || "none"}; ` +
        `font-style: ${mainText.style.fontStyle || "normal"}; ` +
        `font-weight: ${mainText.style.fontWeight || "normal"}; ` +
        `font-family: ${mainText.style.fontFamily || "sans-serif"};`;
});