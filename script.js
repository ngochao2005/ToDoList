const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

function addTask() {
    const taskName = taskInput.value.trim();
    if (taskName === "") return;

    const li = document.createElement("li");

    const span = document.createElement("span");
    span.textContent = taskName;

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Xoá";
    deleteBtn.onclick = function () {
        taskList.removeChild(li);
    };

    li.appendChild(span);
    li.appendChild(deleteBtn);
    taskList.appendChild(li);

    taskInput.value = "";
}

function clearAll() {
    taskList.innerHTML = "";
}
