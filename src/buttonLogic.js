import { clearContentAreaContainer, toggleContentAreaAddTaskButton, customizeContentAreaHeader, toggleContentAreaAddProjectTaskButton } from "./contentPage";
import {displayAllTasks,displayTodaysTasks,displayWeeksTasks} from "./tasks.js";

const sidebarTaskButtonPressed = function() {
    let allTasks = document.querySelector(".sidebar-task-buttons");
    allTasks.addEventListener("click", (event) => {
        if (event.target.classList.contains("All-button")) {
            allButtonPressed();
        } else if (event.target.classList.contains("Today-button")) {
            todayButtonPressed();
        } else if (event.target.classList.contains("Week-button")) {
            weekButtonPressed();
        }
    })
}

const allButtonPressed = function() {
    toggleContentAreaAddTaskButton(true)
    toggleContentAreaAddProjectTaskButton(false);
    clearContentAreaContainer();
    customizeContentAreaHeader("All Tasks");
    displayAllTasks();
}

const todayButtonPressed = function() {
    toggleContentAreaAddTaskButton(false)
    toggleContentAreaAddProjectTaskButton(false);
    clearContentAreaContainer();
    customizeContentAreaHeader("Today's Tasks");
    displayTodaysTasks();
}

const weekButtonPressed = function() {
    toggleContentAreaAddTaskButton(false)
    toggleContentAreaAddProjectTaskButton(false);
    clearContentAreaContainer();
    customizeContentAreaHeader("This Week's Tasks");
    displayWeeksTasks();
}

export {weekButtonPressed,allButtonPressed,todayButtonPressed,sidebarTaskButtonPressed};