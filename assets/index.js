const taskInput = document.querySelector('.taskinput');
const addButton = document.querySelector('.add-button');
const clearButton = document.querySelector('.clear-button');
const taskList = document.querySelector('.tasklist');
const noTasks = document.querySelector('.notasks');

function createTask() {
    const taskValue = taskInput.value;
    if (taskValue !== '') {
        clearButton.disabled = false;
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

        // Добавляем обработчик события для чекбокса
        checkbox.addEventListener('click', function () {
            newTask.classList.toggle('checked');
            saveToLocalStorage();
        });
    }
    saveToLocalStorage();
}

function clearTaskList() {
    taskList.innerHTML = '';
    noTasks.classList.remove('nodisplay');
    clearButton.disabled = false;
    localStorage.clear();
}

function saveToLocalStorage() {
    // Сохраняем HTML содержимое списка в локальное хранилище
    localStorage.setItem('tasklist', taskList.innerHTML);
}

function showTaskList() {
    // Восстанавливаем список из локального хранилища
    taskList.innerHTML = localStorage.getItem('tasklist');
    if (taskList.innerHTML !== '') {
        clearButton.disabled = false;
        noTasks.classList.add('nodisplay');
    }
}

showTaskList();

addButton.addEventListener('click', createTask);
clearButton.addEventListener('click', clearTaskList);