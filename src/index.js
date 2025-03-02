import "./reset.css"
import "./style.css"

import { createCard } from "./card.js";



const createTaskWindow = document.getElementById('dialog-task');
const closeCreateTaskWindowButton = document.getElementById("close-task");
const createNewTaskButton = document.getElementById("new-task-button");
const submitNewTaskButton = document.getElementById('submit-task');

const createNewProjectButton = document.getElementById('new-project-button');


const ui = uiController();
const defaultProject = createProject("Default");

function createTask(title, description, dueDate, priority) {
    return {
        title,
        description,
        dueDate,
        priority,
    }
}

function createProject(name, description) {
    return {
        name,
        description,
        tasks: [],
        addTask(task){
            this.tasks.push(task)
        }, 
    }
}



function uiController() {
    return {        
        displayTasks(){
            document.getElementById("task-container").innerHTML = ""; 
            defaultProject.tasks.forEach(task => createCard(task));
        },

        submitTask(event) {     
            event.preventDefault(); 

            const task = createTask(titleTask.value, descriptionTask.value, dueDateTask.value, priorityTask.checked);
            defaultProject.addTask(task)

            ui.displayTasks();   
            ui.closeTaskWindow();
        },

        openTaskWindow(){
            createTaskWindow.showModal();
        },

        closeTaskWindow(){
            createTaskWindow.close();
            submitNewTaskButton.reset();
        },
    }
}


createNewTaskButton.addEventListener('click', () => ui.openTaskWindow());
submitNewTaskButton.addEventListener('submit', (event) => ui.submitTask(event));
closeCreateTaskWindowButton.addEventListener('click', () => ui.closeTaskWindow());






