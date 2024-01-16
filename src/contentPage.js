import {createModal} from "./modal.js";

const contentAreaLayout = function(contentArea) {
    let contentAreaHeader = loadContentAreaHeader();
    contentArea.appendChild(contentAreaHeader);

    let contentAreaContainer = loadContentAreaContainer();
    contentArea.appendChild(contentAreaContainer);

    let contentAreaAddTaskButton = loadContentAreaAddTaskButton();
    contentArea.appendChild(contentAreaAddTaskButton);
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
    let contentAreaAddTaskButton = document.createElement("button");
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
    return contentAreaAddTaskButton;
}

const toggleContentAreaAddTaskButton = (flag) => {
    let contentAreaAddTaskButton = document.querySelector(".content-area-add-task-button");
    if (flag  == true) {
        contentAreaAddTaskButton.style.display = 'block';
    } else {
        contentAreaAddTaskButton.style.display = "none"
    }
}

export {clearContentAreaContainer,customizeContentAreaHeader,addTaskToContentAreaContainer,toggleContentAreaAddTaskButton,contentAreaLayout,removeTaskFromContentAreaContainer};
