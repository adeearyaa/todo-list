import "./indexStyle.css";
import {sidebarLayout} from "./sidebar.js";
import {contentAreaLayout} from "./contentPage.js";
import { sidebarTaskButtonPressed } from "./buttonLogic";
import { addEventListenerToAddProjects } from "./projectButtonLogic";

const overarchingContainer = document.querySelector("#overarching-container");

const initialLoad = function () {
    loadHeaderContainer();
    loadMiddleContainer();
    loadFooterContainer();
    sidebarTaskButtonPressed();
    addEventListenerToAddProjects();
}

const loadHeaderContainer = function () {
    let header = document.createElement("div");
    header.classList.add("header");
    header.textContent = "DAILY - PLANNER";
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
    console.log("yes");
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