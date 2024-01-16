import { clearContentAreaContainer, toggleContentAreaAddProjectTaskButton, customizeContentAreaHeader, toggleContentAreaAddTaskButton } from "./contentPage";
import { createProjectModal } from "./projectModal";
import { retrieveListOfProjects } from "./projects";
import {updateTaskClassAboutProject,displayProjectTasks} from "./tasks";

const addEventListenerToAddProjects = function() {
    let addProjectButton = document.querySelector(".add-project-button");
    addProjectButton.addEventListener("click", () => {
        let projectModal = document.getElementById('project-modal');
        if (!projectModal) {
            createProjectModal();
            let projectModal = document.getElementById('project-modal');
            projectModal.showModal();
        } else {
            projectModal.showModal();
        }
    });
}

const addEventListenerToProjectButtons = function() {
    let projectButtons = document.querySelectorAll(".list-of-projects");
    projectButtons.forEach(button => {
        button.addEventListener("click", (event) => {
            const classList = Array.from(event.target.classList);
            console.log(classList);
            const projectClass = classList.find(className => className.startsWith('project-'));
            console.log(projectClass);
            if (projectClass) {
                projectDetails(projectClass);

            }
        });
    });
}

const projectDetails = (projectClass) => {
    const projectId = projectClass.replace("project-", "");
    let projectIdInteger = parseInt(projectId);
    console.log(projectIdInteger);
    let listOfProjects = retrieveListOfProjects();
    console.log(listOfProjects);
    const foundProject = listOfProjects.find(project => project.projectId === projectIdInteger);
    console.log(foundProject);
    manipulateContentPage(foundProject);
    toggleContentAreaAddProjectTaskButton(true);
    toggleContentAreaAddTaskButton(false);
}

const manipulateContentPage = (foundProject) => {
    customizeContentAreaHeader(foundProject.title);
    clearContentAreaContainer();
    updateTaskClassAboutProject(foundProject.projectId);
    displayProjectTasks(foundProject.projectId);
}

export {addEventListenerToAddProjects,addEventListenerToProjectButtons};