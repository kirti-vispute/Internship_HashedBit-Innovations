let isHidden = false;

// your js code goes here
function toggleVisibility() {
    let element = document.getElementById("useless-paragraph");

    if (isHidden) {
        element.style.display = "block";
        isHidden = false;
    } else {
        element.style.display = "none";
        isHidden = true;
    }  
}
