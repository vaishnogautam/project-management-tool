function addTask() {
    var taskInput = document.getElementById("taskInput");
    var taskList = document.getElementById("taskList");
    
    if (taskInput.value === "") {
        alert("Please enter a task!");
        return;
    }

    var taskItem = document.createElement("li");
    taskItem.className = "task";
    taskItem.innerHTML = taskInput.value + ' <button onclick="completeTask(this)">Complete</button> <button onclick="deleteTask(this)">Delete</button>';
    taskList.appendChild(taskItem);

    taskInput.value = "";
}

function completeTask(button) {
    var taskItem = button.parentNode;
    taskItem.classList.toggle("completed");
}

function deleteTask(button) {
    var taskItem = button.parentNode;
    taskItem.parentNode.removeChild(taskItem);
}
