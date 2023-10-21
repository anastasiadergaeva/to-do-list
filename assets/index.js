const taskInput = document.querySelector('.taskinput');
const addButton = document.querySelector('.button');
const taskList = document.querySelector('.tasklist');
const noTasks = document.querySelector('.notasks');

function createTask() {
    noTasks.classList.add('nodisplay');
    const taskValue = taskInput.value;
    const newTask = document.createElement('li');
    newTask.classList.add('pointer');
    newTask.classList.add('font');
    newTask.textContent = taskValue;
    taskList.append(newTask);
    taskInput.value = '';
}

function checkTask(newTask) {
    if (newTask.target.tagName === 'LI') {
        newTask.target.classList.toggle('checked');
    }
}

addButton.addEventListener('click', createTask);
taskList.addEventListener('click', checkTask);