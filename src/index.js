import "./indexStyle.css";
import {sidebarLayout} from "./sidebar.js";
import {contentAreaLayout} from "./contentPage.js";
import { allButtonPressed, sidebarTaskButtonPressed } from "./buttonLogic";
import { addEventListenerToAddProjects, addEventListenerToProjectButtons } from "./projectButtonLogic";
import checkMark from "./icons8-checkmark-48.png";

const overarchingContainer = document.querySelector("#overarching-container");

const initialLoad = function () {
    loadHeaderContainer();
    loadMiddleContainer();
    loadFooterContainer();
    sidebarTaskButtonPressed();
    addEventListenerToAddProjects();
    addEventListenerToProjectButtons();
    allButtonPressed();
}

const loadHeaderContainer = function () {
    let header = document.createElement("div");
    let icon = new Image();
    icon.src = checkMark;
    icon.classList.add("main-header-icon");
    let text = document.createTextNode("DAILY - PLANNER");
    header.classList.add("header");
    header.appendChild(icon);
    header.appendChild(text);
    overarchingContainer.appendChild(header);
}

const loadMiddleContainer = function () {
    let middleContainer = document.createElement("div");
    middleContainer.classList.add("middle-container");
    overarchingContainer.appendChild(middleContainer);
    loadSidebar(middleContainer);
    loadContentArea(middleContainer);
}

const loadSidebar = function(middleContainer) {
    let sidebar = document.createElement("div");
    sidebar.classList.add("sidebar");
    sidebarLayout(sidebar);
    middleContainer.appendChild(sidebar);
}

const loadContentArea = function(middleContainer) {
    let contentArea = document.createElement("div");
    contentArea.classList.add("content-area");
    contentAreaLayout(contentArea);
    middleContainer.appendChild(contentArea);
}

const loadFooterContainer = function () {
    let footer = document.createElement("div");
    footer.classList.add("footer");
    let copyrightDiv = "<div>Copyright" + " &copy; " + new Date().getFullYear() + "</div>" ;
    let githubLink = "<a href='https://example.com'>adeearyaa</a>";
    footer.innerHTML = `${copyrightDiv} ${githubLink}` ;
    overarchingContainer.appendChild(footer);
}

initialLoad();