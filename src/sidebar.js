import "./sidebarStyle.css";

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
    let displayList = ["All", "Today", "Week", "Month"];
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
    let displayList = ["All", "Today", "Week", "Month"];
    for (let item of displayList) {
        let listItem = document.createElement("button");
        listItem.classList.add("task-buttons");
        listItem.textContent = item;
        list.appendChild(listItem);
    }
    projectSection.append(list);
    
}

export {customizeSidebar};