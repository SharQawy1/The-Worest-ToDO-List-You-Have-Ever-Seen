let input = document.querySelector("input");
let btn = document.querySelector(".submit");
let tasksBox = document.querySelector(".tasks");

if (window.localStorage.getItem("tasksStorage") == null) {
  console.log("Add A New Note");
  let tasks = [];
  btn.onclick = function () {
    document.querySelector(".tasks").innerHTML = "";
    if (input.value == "") {
      console.log("empty");
    } else {
      tasks.push(input.value);
      input.value = "";
    }
    for (let i = 0; i < tasks.length; i++) {
      let task = document.createElement("div");
      task.classList.add("task");
      task.textContent = tasks[i];
      tasksBox.appendChild(task);
    }
    window.localStorage.clear;
    tasks.forEach(function (ele) {});
    window.localStorage.setItem("tasksStorage", tasks);
  };
} else {
  let tasks = window.localStorage.getItem("tasksStorage").split(","); ///////////////////////
  btn.onclick = function () {
    if (input.value == "") {
      console.log("empty");
    } else {
      tasks.push(input.value);
      input.value = "";
    }
    document.querySelector(".tasks").innerHTML = "";
    for (let i = 0; i < tasks.length; i++) {
      let task = document.createElement("div");
      task.classList.add("task");
      task.textContent = tasks[i];
      tasksBox.appendChild(task);
    }
    window.localStorage.clear;
    window.localStorage.setItem("tasksStorage", tasks);
  };
  let deleteBtn = document.querySelector(".task:nth-of-type(1)");
  deleteBtn.onclick = function () {
    deleteBtn.parentElement.remove();
  };
}

onload = function () {
  btn.click();
};

let task = document.querySelector(".task");
let deleteBtn = document.querySelector(".delete");
deleteBtn.onclick = function () {
  window.localStorage.clear();
  window.location.reload();
};
