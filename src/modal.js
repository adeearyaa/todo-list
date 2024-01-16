import { addTaskToContentAreaContainer } from "./contentPage";
import "./modalStyle.css";
import { addTask, createTaskDiv,removeTaskButtonDisplay,Task } from "./tasks";

function createModal() {
    // Create the dialog element
    const modal = document.createElement('dialog');
    modal.setAttribute('id', 'myModal');
    modal.classList.add('modal');

    // Modal Header
    const header = document.createElement('h2');
    header.textContent = 'New Task';
    modal.appendChild(header);

    // Task Name Input
    const taskNameInput = document.createElement('input');
    taskNameInput.setAttribute('type', 'text');
    taskNameInput.setAttribute('placeholder', 'Task Name');
    taskNameInput.id = 'taskName';
    modal.appendChild(taskNameInput);

    // Date Created Input
    const dateInput = document.createElement('input');
    dateInput.setAttribute('type', 'date');
    dateInput.id = 'dateCreated';
    modal.appendChild(dateInput);

    // Priority Select
    const prioritySelect = document.createElement('select');
    prioritySelect.id = 'priority';
    ['High', 'Medium', 'Low'].forEach(priority => {
        const option = document.createElement('option');
        option.value = priority;
        option.textContent = priority;
        prioritySelect.appendChild(option);
    });
    modal.appendChild(prioritySelect);

    // Submit Button
    const submitButton = document.createElement('button');
    submitButton.textContent = 'Submit';
    submitButton.onclick = () => {
        const taskName = document.getElementById('taskName').value;
        const dateCreated = document.getElementById('dateCreated').value;
        const priority = document.getElementById('priority').value;
        let integerPriority;
        switch(priority) {
            case "High":
                integerPriority = 1;
                break;
            case "Medium":
                integerPriority = 2;
                break;
            case "Low":
                integerPriority = 3;
                break;
        }
        let newTask = new Task(taskName,dateCreated,integerPriority,null,false);
        addTask(newTask);
        modal.close();
    };
    modal.appendChild(submitButton);

    // Close Button
    const closeButton = document.createElement('button');
    closeButton.textContent = 'Close';
    closeButton.onclick = () => modal.close();
    modal.appendChild(closeButton);

    document.body.appendChild(modal);
}

export {createModal};