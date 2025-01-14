var Input = ""; 
var totalgames = 0;
var totalpins = 0;

onEvent("Score", "change", function () {
    Input = getNumber("Score");
});
onEvent("Score", "keydown", function (event) {
    if (event.key === "Enter") {
        event.preventDefault(); 
        calculatescore();
    }
});
onEvent("1", "click", function () {
    setNumber("Score", Input + "1");
    Input = getNumber("Score");
});
onEvent("2", "click", function () {
    setNumber("Score", Input + "2");
    Input = getNumber("Score");
});
onEvent("3", "click", function () {
    setNumber("Score", Input + "3");
    Input = getNumber("Score");
});
onEvent("4", "click", function () {
    setNumber("Score", Input + "4");
    Input = getNumber("Score");
});
onEvent("5", "click", function () {
    setNumber("Score", Input + "5");
    Input = getNumber("Score");
});
onEvent("6", "click", function () {
    setNumber("Score", Input + "6");
    Input = getNumber("Score");
});
onEvent("7", "click", function () {
    setNumber("Score", Input + "7");
    Input = getNumber("Score");
});
onEvent("8", "click", function () {
    setNumber("Score", Input + "8");
    Input = getNumber("Score");
});
onEvent("9", "click", function () {
    setNumber("Score", Input + "9");
    Input = getNumber("Score");
});
onEvent("0", "click", function () {
    setNumber("Score", Input + "0");
    Input = getNumber("Score");
});
onEvent("reset", "click", function () {
    setNumber("Score", "");
    Input = "";
});
onEvent("enter", "click", function () {
    calculatescore();
});
function calculatescore() {
    totalgames = totalgames + 1;
    setvalue("totalgames", totalgames);

    totalpins = totalpins + Number(getNumber("Score"));
    setvalue("average", totalpins /totalgames);

    setNumber("Score", "");
    Input = "";
}


// the below code was helped by my dad to help make it work like code.org

function onEvent(element, action, func) {
    document.getElementById(element).addEventListener(action, func);
}

function setNumber(element, value) {
    document.getElementById(element).value = value;
}
function setvalue(element, value) {
    document.getElementById(element).innerHTML = value;
}
function getNumber(element) {
    return document.getElementById(element).value;
}
