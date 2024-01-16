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
     let project1 = new Project("football-match");
     let project2 = new Project("hackathon");
     return Project.AllProjects;
 }

 export{retrieveListOfProjects};