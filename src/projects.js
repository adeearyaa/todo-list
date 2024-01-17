 import {addToProjectButtonsList} from "./sidebar.js";
 
 class Project {

    static AllProjects = [];
    static projectId = 0;

    constructor(title) {
        this.projectId = Project.projectId++;
        this.title = title;
        Project.AllProjects.push(this)
    }

    static removeProject(id) {
        Project.AllProjects = Project.AllProjects.filter(project => project.projectId !== id)
    }

 } 

 const retrieveListOfProjects = () => {
     return Project.AllProjects;
 }

 const addNewProjectButton = (newProject) => {
    let projectButton = document.createElement("button");
    projectButton.textContent = newProject.title;
    projectButton.classList.add(`project-${newProject.projectId}`);
    addToProjectButtonsList(projectButton);
}

 export{retrieveListOfProjects,Project,addNewProjectButton};