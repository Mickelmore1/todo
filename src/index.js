import "./reset.css"
import "./style.css"

import { createTaskCard, createProjectLink } from "./card.js";



const createTaskWindow = document.getElementById('dialog-task');
const closeCreateTaskWindowButton = document.getElementById("close-task");
const createNewTaskButton = document.getElementById("new-task-button");
const submitNewTaskButton = document.getElementById('submit-task');

const createProjectWindow = document.getElementById('dialog-project');
const closeCreateProjectWindowButton = document.getElementById("close-project");
const createNewProjectButton = document.getElementById('new-project-button');
const submitNewProjectButton = document.getElementById('submit-project');




const ui = uiController();
const defaultProject = createProject("Default");
const projects = allProjects();
window.checkProject = projects;
window.projectsArray = projects.projectsList;

function createTask(title, description, dueDate, priority) {
    return {
        title,
        description,
        dueDate,
        priority,
    }
}

function createProject(title, description) {
    return {
        title,
        description,
        tasks: [],

        addTask(task){
            this.tasks.push(task);
        }, 
    }
}

function allProjects(){
    return {
        projectsList: [],

        addProject(project){
            console.log(project)
            console.log("its being pushed!")
            this.projectsList.push(project);
            console.log("after= "+this.projectsList)
        },
    }
}

function uiController() {
    return {        
        displayTasks(){
            document.getElementById("task-container").innerHTML = ""; 
            defaultProject.tasks.forEach(task => createTaskCard(task));
        },

        displayProjects(){
            document.getElementById("project-container").innerHTML = "";
            projects.projectsList.forEach(project => createProjectLink(project));            
        },

        submitTask(event) {     
            event.preventDefault(); 

            const task = createTask(titleTask.value, descriptionTask.value, dueDateTask.value, priorityTask.checked);
            defaultProject.addTask(task)

            ui.displayTasks();   
            ui.closeTaskWindow();
        },

        submitProject(event){
            event.preventDefault();

            console.log("submitted")

            const project = createProject(titleProject.value, descriptionProject.value);
            projects.addProject(project);

            ui.displayProjects();
            ui.closeProjectWindow();
        },

        openTaskWindow(){
            createTaskWindow.showModal();
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


createNewTaskButton.addEventListener('click', () => ui.openTaskWindow());
submitNewTaskButton.addEventListener('submit', (event) => ui.submitTask(event));
closeCreateTaskWindowButton.addEventListener('click', () => ui.closeTaskWindow());

createNewProjectButton.addEventListener('click', () => ui.openProjectWindow());
submitNewProjectButton.addEventListener('submit', (event) => ui.submitProject(event));
closeCreateProjectWindowButton.addEventListener('click', () => ui.closeProjectWindow);






