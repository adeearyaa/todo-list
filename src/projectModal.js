import "./projectModalStyle.css";
import {Project,addNewProjectButton} from "./projects.js"

function createProjectModal() {
  // Create the dialog element
  let modal = document.createElement("dialog");
  modal.setAttribute("id", "project-modal");

  // Modal Header
  const header = document.createElement("h2");
  header.textContent = "New Project";
  modal.appendChild(header);

  // Project Title Input
  const titleInput = document.createElement("input");
  titleInput.setAttribute("type", "text");
  titleInput.setAttribute("placeholder", "Project Title");
  titleInput.id = "projectTitle";
  modal.appendChild(titleInput);

  // Submit Button
  const submitButton = document.createElement("button");
  submitButton.textContent = "Submit";
  submitButton.onclick = () => {
    const projectTitle = document.getElementById("projectTitle").value;
    let newProject = new Project(projectTitle);
    addNewProjectButton(newProject); 
  };
  modal.appendChild(submitButton);

  // Close Button
  const closeButton = document.createElement("button");
  closeButton.textContent = "Close";
  closeButton.onclick = () => modal.close();
  modal.appendChild(closeButton);

  // Append the modal to the body
  document.body.appendChild(modal);
}

export { createProjectModal };
