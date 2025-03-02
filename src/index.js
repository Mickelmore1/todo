import "./reset.css"
import "./style.css"

import { createCard } from "./card.js";




const dialog = document.getElementById('dialog');
const form = document.getElementById('submit-task');



function createTask(title, description, dueDate, priority) {
    return {
        title,
        description,
        dueDate,
        priority,
    }
}

function createProject(name) {
    return {
        name,
        tasks: [],
        addTask(task){
            this.tasks.push(task)
        }, 
/*         displayTasks(){
            document.getElementById("task-container").innerHTML = ""; 
            this.tasks.forEach(task => createCard(task));
        } */
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
            defaultProject.addTask(task)
            ui.displayTasks();
                 
            dialog.close();
            form.reset();
        }
    }
}


let ui = uiController();

form.addEventListener('submit', (event) => submitTask(event));


/* function submitTask(event) {     
    event.preventDefault(); 

    let task = createTask(title.value, description.value, dueDate.value, priority.checked);
    defaultProject.addTask(task)
    ui.displayTasks();
         
    dialog.close();
    form.reset();
}; */


console.log(uiController())
   
document.getElementById("new-task").addEventListener('click', () => dialog.showModal());
document.getElementById('close').addEventListener('click', function() { 
    dialog.close(); 
    form.reset();
    });






