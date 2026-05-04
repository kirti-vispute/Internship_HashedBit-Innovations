function swapTheme() {
//write your code
let mainDiv = document.getElementById("app");
    let button = document.getElementById("swap");

    if (mainDiv.className === "day") {
        mainDiv.className = "night";
        button.className = "button_night";
    } else {
        mainDiv.className = "day";
        button.className = "button_day";
    }
}