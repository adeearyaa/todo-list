const addEventListenerToAddProjects = function() {
    let addProjectButton = document.querySelector(".add-project-button");
    addProjectButton.addEventListener("click", () => {
        let projectModal = document.getElementById('project-modal');
        if (!projectModal) {
            createModal();
            let projectModal = document.getElementById('project-modal');
            projectModal.showModal();
        } else {
            projectModal.showModal();
        }
    });
}

export {addEventListenerToAddProjects};