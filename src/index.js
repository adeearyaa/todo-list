import "./indexStyle.css";
import {customizeSidebar} from "./sidebar.js"
import {contentPageLayout} from "./contentPage.js"

const initialMainContainer = document.querySelector("#index-container");

const initialLoad = function () {
    headerContainer();
    middleContainer();
    footerContainer();
}

const headerContainer = function () {
    let header = document.createElement("div");
    header.classList.add("header");
    header.textContent = "DAILY - PLANNER";
    initialMainContainer.appendChild(header);
}

const middleContainer = function () {
    let middle = document.createElement("div");
    middle.classList.add("middle-container");
    initialMainContainer.appendChild(middle);
    let sidebar = document.createElement("div");
    let mainContentPage = document.createElement("div");
    mainContentPage.classList.add("main-content");
    contentPageLayout(mainContentPage);
    sidebar.classList.add("sidebar");
    // create this function in sidebar.js but its styling will be done in indexStyle.css
    customizeSidebar(sidebar);
    middle.appendChild(sidebar);
}


const footerContainer = function () {
    let footer = document.createElement("div");
    footer.classList.add("footer");
    let copyrightDiv = "<div>Copyright" + " &copy; " + new Date().getFullYear() + "</div>" ;
    let githubLink = "<a href='https://example.com'>adeearyaa</a>";
    footer.innerHTML = `${copyrightDiv} ${githubLink}` ;
    initialMainContainer.appendChild(footer);
}

initialLoad();