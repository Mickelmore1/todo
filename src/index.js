import "./reset.css"
import "./style.css"

import { createTaskCard, createProjectLink 
    } from "./card.js";


const projectsList = [];
window.projectsList = projectsList


function addProject(project){
    projectsList.push(project);
}


//Dialogs
const createTaskWindow = document.getElementById('dialog-task');
const createProjectWindow = document.getElementById('dialog-project');

const createNewTaskButton = document.getElementById("new-task-button");
const closeCreateTaskWindowButton = document.getElementById("close-task");
const submitNewTaskButton = document.getElementById('submit-task');
const selectProject = document.getElementById('projectTask');

const createNewProjectButton = document.getElementById('new-project-button');
const closeCreateProjectWindowButton = document.getElementById("close-project");
const submitNewProjectButton = document.getElementById('submit-project');

export const ui = uiController();







function createTask(title, description, dueDate, priority) {
    return {
        title,
        description,
        dueDate,
        priority,
    }
}


function createProject(title) {

    return {
        title,
        tasks: [],
        projectId: projectsList.length,          
        addTask(task){
            this.tasks.push(task);
        }, 

    }
}





function uiController() {
    return {        
        displayTasks(projectID){
            console.log(projectID)
            console.log(projectsList[projectID].tasks)
            document.getElementById("task-container").innerHTML = ""; 
            projectsList[projectID].tasks.forEach(task => createTaskCard(task));
        },

        displayProjects(){
            document.getElementById("project-container").innerHTML = "";
            projectsList.forEach(project => createProjectLink(project));            
        },

        submitTask(event) {     
            event.preventDefault(); 

            const task = createTask(titleTask.value, descriptionTask.value, dueDateTask.value, priorityTask.value);
            const project = projectTask.value
            projectsList[project].addTask(task)
            let storageTask = JSON.stringify(projectsList[project])
            localStorage.test = storageTask;

              
            ui.closeTaskWindow();
        },

        submitProject(event){
            event.preventDefault();

            console.log("submitted")

            const project = createProject(titleProject.value);
            addProject(project);

            ui.displayProjects();
            ui.closeProjectWindow();
        },

        openTaskWindow(){
            createTaskWindow.showModal();
            selectProject.innerHTML = "";
            projectsList.forEach((project => {

                const opt = document.createElement('option')
                opt.innerText = project.title;
                opt.value = project.projectId;
                selectProject.appendChild(opt);
                }
           ))
        },

        closeTaskWindow(){
            createTaskWindow.close();
            submitNewTaskButton.reset();
        },

        openProjectWindow(){
            createProjectWindow.showModal();

        },

        closeProjectWindow(){
            createProjectWindow.close();
            submitNewProjectButton.reset();
        },
    }
}

//let stringifyProjects = JSON.stringify()

createNewTaskButton.addEventListener('click', () => ui.openTaskWindow());
submitNewTaskButton.addEventListener('submit', (event) => ui.submitTask(event));
closeCreateTaskWindowButton.addEventListener('click', () => ui.closeTaskWindow());

createNewProjectButton.addEventListener('click', () => ui.openProjectWindow());
submitNewProjectButton.addEventListener('submit', (event) => ui.submitProject(event));
closeCreateProjectWindowButton.addEventListener('click', () => ui.closeProjectWindow());


function startUp(){
    const project = createProject("Default");
    addProject(project);
    ui.displayProjects();    
}

startUp();


let arrayTest = [];
console.log(localStorage.test)


document.addEventListener("DOMContentLoaded", () => arrayTest = arrayTest.push(JSON.parse(localStorage.test)))
window.arrayTest2 = arrayTest;
