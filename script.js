var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");


function inputLength() {
    return input.value.length;
}

function createListElement() {

    // create element
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
    input.value = "";

    // add button/delete feature w/each new list item ...

    // create element
    var button = document.createElement("button");
    button.appendChild(document.createTextNode(" - "));
    // append button to list
    li.appendChild(button);
    // for every button created
    button.onclick = removeParent;

}

function addListAfterClick() {
    if (inputLength() > 0) {
        createListElement();
    }
}

function addListAfterKeypress(event) {
    if (inputLength() > 0 && event.keyCode === 13) {
        createListElement();
    }
}

function removeParent(event) {
    event.target.parentNode.remove();
}

ul.onclick=function(event){
	var target=event.target;
	target.classList.toggle("done");
}


button.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeypress);
