const taskInput = document.querySelector('.taskinput');
const addButton = document.querySelector('.add-button');
const clearButton = document.querySelector('.clear-button');
const taskList = document.querySelector('.tasklist');
const noTasks = document.querySelector('.notasks');

function createTask() {
    const taskValue = taskInput.value;
    if (taskValue !== '') {
        noTasks.classList.add('nodisplay');
        const newTask = document.createElement('li');
        newTask.classList.add('font');
        newTask.classList.add('taskstyle');
        taskList.appendChild(newTask);

        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.classList.add('pointer');
        checkbox.value = taskValue;
        newTask.appendChild(checkbox);

        const label = document.createElement('label');
        label.textContent = taskValue;
        newTask.appendChild(label);
        taskInput.value = '';
    }
    saveToLocalStorage();
}

function checkTask(checkbox) {
    if (checkbox.target.tagName === 'LI') {
        checkbox.target.classList.toggle('checked');
        saveToLocalStorage();
    }
}

function clearTaskList() {
    taskList.innerHTML = '';
    noTasks.classList.remove('nodisplay');
    clearButton.disabled = true;
    localStorage.clear();
}

function saveToLocalStorage() {
    localStorage.setItem('tasklist'.taskList.innerHTML);
}

function showTaskList() {
    taskList.innerHTML = localStorage.getItem('tasklist');
    if (taskList.innerHTML !== '') {
        clearButton.disabled = false;
        noTasks.classList.add('nodisplay');
    }
}

showTaskList();

addButton.addEventListener('click', createTask);
taskList.addEventListener('click', checkTask);
clearButton.addEventListener('click', clearTaskList);