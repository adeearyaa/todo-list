import "./sidebarStyle.css";
import {retrieveListOfProjects} from "./projects.js";


const sidebarLayout = function(sidebar) {
    let sidebarTasks = loadSidebarTasks();
    sidebar.appendChild(sidebarTasks);

    let projectHeader = loadProjectHeader();
    sidebar.appendChild(projectHeader);

    let projectSection = loadProjectList();
    sidebar.appendChild(projectSection);

    let addProjectButton = loadAddProjectButton();
    sidebar.appendChild(addProjectButton);
}

const loadSidebarTasks = () => {
    let taskSection = document.createElement("div");
    taskSection.classList.add("sidebar-task-buttons");
    taskSection.appendChild(customizeTaskButtons());
    return taskSection;
}

const customizeTaskButtons = function() {
    let taskButtons = document.createElement("div");
    let displayList = ["All", "Today", "Week"];
    for (let item of displayList) {
        let taskButton = document.createElement("button");
        taskButton.classList.add("task-buttons");
        taskButton.classList.add(`${item}-button`)
        taskButton.textContent = item;
        taskButtons.appendChild(taskButton);
    }
    return taskButtons;
}

const loadProjectHeader = () => {
    let projectHeader = document.createElement("h2");
    customizeHeader(projectHeader);
    projectHeader.classList.add("sidebar-project-header");
    return projectHeader;
}

const customizeHeader = function(projectHeader) {
    projectHeader.textContent = "PROJECTS";
}

const loadProjectList = () => {
    let projectList = document.createElement("div");
    projectList.classList.add("sidebar-project-list");
    projectList.appendChild(displayProjectList());
    return projectList;
}


const displayProjectList = function()  {
    let listOfProjects = document.createElement("div");
    listOfProjects.classList.add("list-of-projects");
    let projectDisplayList = retrieveListOfProjects();
    for (let project of projectDisplayList) {
        let projectButton = document.createElement("button");
        projectButton.classList.add(`project-${project.projectId}`);
        projectButton.textContent = project.title;
        listOfProjects.appendChild(projectButton);
    }
    return listOfProjects;
}

// should be called by the function in projects which adds
const addToProjectButtonsList = function(projectButton) {
        let listOfProjects = document.querySelector(".list-of-projects");
        listOfProjects.appendChild(projectButton);
}

const loadAddProjectButton = () => {
    let addProjectButton = document.createElement("button");
    addProjectButton.classList.add("add-project-button");
    customizeAddProjectButton(addProjectButton);
    return addProjectButton;
}

const customizeAddProjectButton = function(addProjectButton) {
    addProjectButton.textContent = "+ Add Project";
}


export {sidebarLayout,addToProjectButtonsList};