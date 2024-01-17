import {createModal,createAddTaskProjectModal} from "./modal.js";
import "./contentPageStyle.css";

const contentAreaLayout = function(contentArea) {
    let contentAreaHeader = loadContentAreaHeader();
    contentArea.appendChild(contentAreaHeader);

    let contentAreaContainer = loadContentAreaContainer();
    contentArea.appendChild(contentAreaContainer);

    let contentAreaAddTaskButton = loadContentAreaAddTaskButton();
    contentArea.appendChild(contentAreaAddTaskButton);

    let contentAreaAddProjectTaskButton = loadContentAreaAddProjectTaskButton();
    contentArea.appendChild(contentAreaAddProjectTaskButton);
}

const loadContentAreaHeader = () => {
    let contentAreaHeader = document.createElement("h2");
    contentAreaHeader.classList.add("content-area-header");
    return contentAreaHeader;
}

const customizeContentAreaHeader = (newHeader) => {
    let contentAreaHeader = document.querySelector(".content-area-header");
    contentAreaHeader.textContent = newHeader;
}

const loadContentAreaContainer = () => {
    let contentAreaContainer = document.createElement("div");
    contentAreaContainer.classList.add("content-area-container");
    return contentAreaContainer;
}

const clearContentAreaContainer = () => {
    let contentAreaContainer = document.querySelector(".content-area-container");
    contentAreaContainer.innerHTML = "";
}

const addTaskToContentAreaContainer = (contentAreaTasks) => {
    let contentAreaContainer = document.querySelector(".content-area-container");
    contentAreaContainer.appendChild(contentAreaTasks);
}

const removeTaskFromContentAreaContainer = (contentAreaTasks) => {
    let contentAreaContainer = document.querySelector(".content-area-container");
    contentAreaContainer.removeChild(contentAreaTasks);
}

const loadContentAreaAddTaskButton = () => {
    let addButtonContainer = document.createElement("div");
    addButtonContainer.classList.add("add-button-container");
    let contentAreaAddTaskButton = document.createElement("button");
    addButtonContainer.appendChild(contentAreaAddTaskButton);
    contentAreaAddTaskButton.classList.add("content-area-add-task-button");
    contentAreaAddTaskButton.textContent = "+ Add Task";
    contentAreaAddTaskButton.addEventListener("click", () => {
        let modal = document.getElementById('myModal');
        if (!modal) {
            createModal();
            modal = document.getElementById('myModal');
            modal.showModal();
        } else {
            modal.showModal();
        }
    });
    contentAreaAddTaskButton.style.display = "none";
    return addButtonContainer;
}

const toggleContentAreaAddTaskButton = (flag) => {
    let contentAreaAddTaskButton = document.querySelector(".content-area-add-task-button");
    if (flag  == true) {
        contentAreaAddTaskButton.style.display = 'block';
    } else {
        contentAreaAddTaskButton.style.display = "none"
    }
}

const loadContentAreaAddProjectTaskButton = () => {
    let addButtonContainer = document.createElement("div");
    addButtonContainer.classList.add("add-button-container");
    let contentAreaAddProjectTaskButton = document.createElement("button");
    addButtonContainer.appendChild(contentAreaAddProjectTaskButton);
    contentAreaAddProjectTaskButton.classList.add("content-area-add-project-task-button");
    contentAreaAddProjectTaskButton.textContent = "+ Add Task";
    contentAreaAddProjectTaskButton.addEventListener("click", () => {
        let addTaskProjectModal = document.getElementById('add-task-project-modal');
        if (!addTaskProjectModal) {
            createAddTaskProjectModal();
            let addTaskProjectModal = document.getElementById('add-task-project-modal');
            addTaskProjectModal.showModal();
        } else {
            addTaskProjectModal.showModal();
        }
    });
    contentAreaAddProjectTaskButton.style.display = "none";
    return addButtonContainer;
}

const toggleContentAreaAddProjectTaskButton = (flag) => {
    let contentAreaAddProjectTaskButton = document.querySelector(".content-area-add-project-task-button");
    if (flag  == true) {
        contentAreaAddProjectTaskButton.style.display = 'block';
    } else {
        contentAreaAddProjectTaskButton.style.display = "none"
    }
}

export {loadContentAreaAddProjectTaskButton,toggleContentAreaAddProjectTaskButton,clearContentAreaContainer,customizeContentAreaHeader,addTaskToContentAreaContainer,toggleContentAreaAddTaskButton,contentAreaLayout,removeTaskFromContentAreaContainer};
