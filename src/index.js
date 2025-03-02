import "./reset.css"
import "./style.css"

import { createCard } from "./card.js";



const createTaskWindow = document.getElementById('dialog-task');
const submitNewTaskButton = document.getElementById('submit-task');
const createNewTaskButton = document.getElementById("new-task-button");
const closeCreateTaskWindow = document.getElementById("close-task");
const ui = uiController();


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

let defaultProject = createProject("Default");

function uiController() {
    return {        
        displayTasks(){
            document.getElementById("task-container").innerHTML = ""; 
            defaultProject.tasks.forEach(task => createCard(task));
        },

        submitTask(event) {     
            event.preventDefault(); 

            let task = createTask(title.value, description.value, dueDate.value, priority.checked);
            console.log(task);
            defaultProject.addTask(task)
            ui.displayTasks();
                 
            createTaskWindow.close();
        },
    }
}


createNewTaskButton.addEventListener('click', () => createTaskWindow.showModal());
submitNewTaskButton.addEventListener('submit', (event) => ui.submitTask(event));

  
closeCreateTaskWindow.addEventListener('click', function() { 
    createTaskWindow.close(); 
    }
);






