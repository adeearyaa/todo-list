import {allButtonPressed} from "./sidebar.js";
import {weekButtonPressed} from "./sidebar.js";
import {todayButtonPressed} from "./sidebar.js";

const contentPageLayout = function(mainContentPage) {
    mainPageHeader = document.createElement("h2");
    mainPageHeader.classList.add("main-page-header");
    mainPageItems = document.createElement("div");
    mainPageItems.classList.add("main-page-items");
    mainContentPage.appendChild(mainPageHeader);
    mainContentPage.appendChild(mainPageItems);
    itemsButtonPressed();

}

const itemsButtonPressed = function() {
    allTasks = document.querySelector(".sidebar-tasklist");
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

export {contentPageLayout};
