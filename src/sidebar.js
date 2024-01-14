import "./sidebarStyle.css";
import {displayAllItems} from "./tasks.js";
import {displayTodaysItems} from "./tasks.js";
import {displayWeeksItems} from "./tasks.js";

const customizeSidebar = function(sidebar) {
    let taskSection = document.createElement("div");
    customizeTasklist(taskSection);
    sidebar.appendChild(taskSection);
    let header = document.createElement("h2");
    customizeHeader(header);
    sidebar.appendChild(header);
    let projectSection = document.createElement("div");
    customizeProjectList(projectSection);
    sidebar.appendChild(projectSection);
    let addProjectButton = document.createElement("button");
    customizeProjectButton(addProjectButton);
    sidebar.appendChild(addProjectButton);
}

const customizeHeader = function(header) {
    header.textContent = "PROJECTS";
    header.classList.add("sidebar-header");
}

const customizeProjectButton = function(customizeProjectButton) {
    customizeProjectButton.textContent = "+ Add Project";
    customizeProjectButton.classList.add("project-button");
}

const customizeTasklist = function(taskSection) {
    taskSection.classList.add("sidebar-tasklist");
    let list = document.createElement("div");
    let displayList = ["All", "Today", "Week"];
    for (let item of displayList) {
        let listItem = document.createElement("button");
        listItem.classList.add("task-buttons");
        listItem.classList.add(`${item}-button`)
        listItem.textContent = item;
        list.appendChild(listItem);
    }
    taskSection.appendChild(list);
}

const customizeProjectList = function(projectSection)  {
    projectSection.classList.add("sidebar-project-list");
    let list = document.createElement("div");
    let displayList = ["All", "Today", "Week"];
    for (let item of displayList) {
        let listItem = document.createElement("button");
        listItem.classList.add("task-buttons");
        listItem.textContent = item;
        list.appendChild(listItem);
    }
    projectSection.append(list);
    
}

const allButtonPressed = function() {
    mainPageItems = document.querySelector(".main-page-items");
    mainPageItems.innerHTML = "";
    contentPageHeader("All Tasks");
    displayAllItems(mainPageItems);
}

const todayButtonPressed = function() {
    mainPageItems = document.querySelector(".main-page-items");
    mainPageItems.innerHTML = "";
    contentPageHeader("Today's Tasks");
    displayTodaysItems(mainPageItems);
}

const weekButtonPressed = function() {
    mainPageItems = document.querySelector(".main-page-items");
    mainPageItems.innerHTML = "";
    contentPageHeader("This Week's Tasks");
    displayWeeksItems(mainPageItems);
}

const contentPageHeader = function(headerValue) {
    mainPageHeader = document.querySelector("main-page-header");
    mainPageHeader.textContent = headerValue
}

export {customizeSidebar, allButtonPressed, weekButtonPressed, todayButtonPressed};