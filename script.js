
function parse(input){
    let new_input = "";
    if (input.length > 40) {
        let i = input.length - 40;
        while (i > 0) {
            new_input += input.substr(0, 40);
            new_input += "<br>";
            input = input.slice(40);
            i = input.length - 40;
        }
        new_input += input;
        console.log(new_input);
        return new_input;
    }
    else
        return input;
}

const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask() {
    if (inputBox.value === '')
        alert("You must wirte somthing");
    else {
        let li = document.createElement("li");
        li.innerHTML = parse(inputBox.value);
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7"; 
        li.appendChild(span);
    }
    inputBox.value = "";
    saveData();
}

listContainer.addEventListener("click", function(e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData();
    }
    else if (e.target.tagName == "SPAN") {
        e.target.parentElement.remove();
        saveData();
    }
}, false);

function saveData() {
    localStorage.setItem("data", listContainer.innerHTML);
}
function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}

showTask();
 