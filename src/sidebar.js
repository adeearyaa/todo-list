import "./sidebarStyle.css";
import {retrieveListOfProjects} from "./projects.js";
import home from "./icons8-home-48.png";
import all from "./icons8-inbox-48.png";
import week from "./icons8-7-days-64.png";
import today from "./icons8-business-64.png"


const sidebarLayout = function(sidebar) {
    let tasksHeader = loadTaskHeader();
    sidebar.appendChild(tasksHeader);

    let sidebarTasks = loadSidebarTasks();
    sidebar.appendChild(sidebarTasks);

    let projectHeader = loadProjectHeader();
    sidebar.appendChild(projectHeader);

    let projectSection = loadProjectList();
    sidebar.appendChild(projectSection);

    let addProjectButton = loadAddProjectButton();
    sidebar.appendChild(addProjectButton);
}

const loadTaskHeader = () => {
    let taskHeader = document.createElement("div");
    taskHeader.classList.add("sidebar-task-header");

    // Create an img element for the icon
    let icon = new Image();
    icon.src = home; // Set the path to your icon image file
    icon.classList.add("icon-class"); // Optional: Add a class for styling
    icon.alt = 'Home'; // Set an alt text for the icon

    // Add the icon to the taskHeader
    taskHeader.appendChild(icon);

    // Create a text node for the "Home" text
    let text = document.createTextNode(" Home");

    // Add the text node to the taskHeader
    taskHeader.appendChild(text);

    return taskHeader;
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
        let text = document.createTextNode(item);
        taskButton.appendChild(text)
        let icon = new Image();
        if (item == "All") {
            icon.src = all;
        } else if (item == "Today") {
            icon.src = today;
        }  else if (item == "Week") {
            icon.src = week;
        }
        icon.classList.add("icon-class"); // Optional: Add a class for styling
        icon.alt = 'Home'; // Set an alt text for the icon
        taskButton.appendChild(icon)
        taskButtons.appendChild(taskButton);
    }
    return taskButtons;
}

const loadProjectHeader = () => {
    let projectHeader = document.createElement("div");
    customizeHeader(projectHeader);
    projectHeader.classList.add("sidebar-project-header");
    return projectHeader;
}

const customizeHeader = function(projectHeader) {
    projectHeader.textContent = "Your Projects";
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
        projectButton.classList.add("button-projects");
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