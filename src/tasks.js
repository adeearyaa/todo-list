import "./taskStyle.css";
import { addTaskToContentAreaContainer,removeTaskFromContentAreaContainer } from "./contentPage";

class Task {

    static AllTasks = [];
    static taskId = 0;
    static addTaskToProjectId = 0;

    constructor(title,date,priority, isProject, projectID) {
        this.taskId = Task.taskId++;
        this.title = title;
        this.date = new Date(date);
        this.priority = priority;
        this.isProject = isProject;
        this.projectID = projectID;
        Task.AllTasks.push(this);
    }

    static removeTask(id) {
        Task.AllTasks = Task.AllTasks.filter(task => task.taskId !== id);
    }
}

const displayAllTasks = function() {
    Task.AllTasks.forEach(task => {
        if (!task.isProject) {
            const taskDiv = createTaskDiv(task);
            addTaskToContentAreaContainer(taskDiv);
            removeTaskButtonDisplay(task);
        }
    });
};

const addTask = function(task) {
    const taskDiv = createTaskDiv(task);
    addTaskToContentAreaContainer(taskDiv);
    removeTaskButtonDisplay(task);
}

const removeTaskButtonDisplay = (task) => {
    let closeButton = document.querySelector(`.remove-task-${task.taskId}`);
    let taskDivToRemove = document.querySelector(`.task-${task.taskId}`);
    closeButton.addEventListener("click", () => {
        removeTaskFromContentAreaContainer(taskDivToRemove);
        Task.removeTask(task.taskId);
    })
}

const displayWeeksTasks = function() {
    const now = new Date();
    const endOfWeek = new Date(now);
    endOfWeek.setDate(now.getDate() + (7 - now.getDay()));

    Task.AllTasks.forEach(task => {
        if (!task.isProject && task.date <= endOfWeek) {
            const taskDiv = createTaskDiv(task);
            addTaskToContentAreaContainer(taskDiv);
            removeTaskButtonDisplay(task);
        }
    });
};

const displayTodaysTasks = function() {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    Task.AllTasks.forEach(task => {
        const taskDate = new Date(task.date);
        taskDate.setHours(0, 0, 0, 0);

        if (!task.isProject && taskDate.getTime() === today.getTime()) {
            const taskDiv = createTaskDiv(task);
            addTaskToContentAreaContainer(taskDiv);
            removeTaskButtonDisplay(task);
        }
    });
};

const displayProjectTasks = (projectID) => {
    console.log("display" + projectID);
    console.log(Task.AllTasks);
    Task.AllTasks.forEach(task => {
        if (task.isProject && task.projectID == projectID) {
            const taskDiv = createTaskDiv(task);
            addTaskToContentAreaContainer(taskDiv);
            removeTaskButtonDisplay(task);
        }
    });
}

const updateTaskClassAboutProject = (projectID) => {
    Task.addTaskToProjectId = projectID;
}

const createTaskDiv = (task) => {
    const taskDiv = document.createElement('div');
    taskDiv.className = 'task-item';
    taskDiv.classList.add(`task-${task.taskId}`);

    const titleSpan = document.createElement('span');
    titleSpan.className = 'task-title';
    titleSpan.textContent = task.title;

    const dateSpan = document.createElement('span');
    dateSpan.className = 'task-date';
    dateSpan.textContent = ` - ${task.date.toDateString()}`;

    const prioritySpan = document.createElement('span');
    prioritySpan.className = `task-priority priority-${task.priority}`;
    switch(task.priority) {
        case 1:
            prioritySpan.textContent = "HIGH";
            break;
        case 2:
            prioritySpan.textContent = "MEDIUM";
            break;
        case 3:
            prioritySpan.textContent = "LOW";
            break;
    }

    const removeButton = document.createElement('button');
    removeButton.classList.add(`remove-task-${task.taskId}`);
    removeButton.classList.add("remove-task-button");
    removeButton.textContent = '✖';

    taskDiv.appendChild(titleSpan);
    taskDiv.appendChild(dateSpan);
    taskDiv.appendChild(prioritySpan);
    taskDiv.appendChild(removeButton);

    return taskDiv;
};


export {updateTaskClassAboutProject,displayProjectTasks,Task,displayAllTasks,displayTodaysTasks,displayWeeksTasks,createTaskDiv,removeTaskButtonDisplay,addTask};