// option - 02 for event handler
function makeYellow() {
    document.body.style.backgroundColor = "yellow";
}
function makeRed() {
    document.body.style.backgroundColor = "red";
}

// option - 03 get element by ID then set onClick
const btnMakeBlue = document.getElementById("btn-make-blue");
btnMakeBlue.onclick = function makeBlue() {
    document.body.style.backgroundColor = "blue";
};

// option - 04 different vision
const btnMakePurple = document.getElementById("btn-make-purple");
btnMakePurple.onclick = makePurple;

function makePurple() {
    document.body.style.backgroundColor = "purple";
}


// option - 05 addEventListener
