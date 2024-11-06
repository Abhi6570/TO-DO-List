//Variable Creation
const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");


//Add the task
function addTask(){
if(inputBox.value === ''){
    alert("You must write something!");
}
else{
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    listContainer.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
     li.appendChild(span);
    
}
inputBox.value = "";
saveData();
}
// for remove the task
listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }

}, false);

// For save data
function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}

//after closing the website retrieve again that data
function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask();
 
