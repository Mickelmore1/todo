const taskContainer = document.getElementById('task-container');
const projectContainer = document.getElementById('project-container');

export const createTaskCard = (task) => {
    const card = document.createElement('div');
    card.className = "task";
    card.innerHTML = `
        <div>
            <h1>${task.title}</h1>
            <button class="add">+</button>
        </div>
        <p>${task.description}</p>
        <p>${task.dueDate}</p>`
    
    taskContainer.appendChild(card);  
    console.log(task);  
}

export const createProjectLink = (project) => {
    const link = document.createElement('li');
    link.className = "project";
    link.innerText = project.title;

    projectContainer.appendChild(link);
    console.log(project)


}
