let input = document.querySelector("input");
let submit = document.querySelector(".submit");
let tasksDiv = document.querySelector(".tasks");
let tasks = [];

dataFromStorage();

if (localStorage.getItem("tasks")) {
  tasks = JSON.parse(localStorage.getItem("tasks"));
}

//Add A Task
submit.onclick = () => {
  if (input.value != "") {
    addTaskToArray(input.value);
    input.value = "";
  }
};

//Click On Task Element
tasksDiv.addEventListener("click", (e) => {
  if (e.target.classList.contains("delete")) {
    e.target.parentElement.remove();
    deleteTask(e.target.parentElement.getAttribute("data-id"));
  }
});

function addTaskToArray(taskText) {
  const task = {
    id: Date.now(),
    title: taskText,
    completed: false,
  };
  tasks.push(task);
  //Add Tasks To Page
  add(tasks);
  dataToStorage(tasks);
}

function add(tasks) {
  //[1]Empty Tasks Array
  tasksDiv.innerHTML = "";
  //[2]Looping On Array Of Tasks
  tasks.forEach((task) => {
    let div = document.createElement("div");
    div.className = "task";
    //[3]Check If Task Is Done
    if (task.completed) {
      div.className = "task done";
    }
    div.setAttribute("data-id", task.id);
    div.appendChild(document.createTextNode(task.title));
    //[4]Delete Button
    let delSpan = document.createElement("span");
    delSpan.className = "delete";
    delSpan.appendChild(document.createTextNode("Delete"));
    div.appendChild(delSpan);
    //[5]Add Task Div To Tasks
    tasksDiv.appendChild(div);
  });
}

function dataToStorage(tasks) {
  window.localStorage.setItem("tasks", JSON.stringify(tasks));
}

function dataFromStorage() {
  let data = window.localStorage.getItem("tasks");
  if (data) {
    let tasks = JSON.parse(data);
    add(tasks);
  }
}

function deleteTask(taskId) {
  tasks = tasks.filter((task) => task.id != taskId);
  dataToStorage(tasks);
}
