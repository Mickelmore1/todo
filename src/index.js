import "./reset.css"
import "./style.css"

import { createTaskCard, createProjectLink 
    } from "./card.js";


function sessionLoad(){
    let retrieveData;

    if (JSON.parse(localStorage.test !== undefined)){
        retrieveData = JSON.parse(localStorage.test)
        retrieveData.forEach(project => {
            Object.defineProperty(project, 'addTask', {
                value: function addTask(task){
                    this.tasks.push(task);
                },
            }) 
        })
    } 
    
    else { retrieveData = [{
        "title": "Default",
        "tasks": [],
        "projectId": 0,
        "addTask": function addTask(task){
            this.tasks.push(task);
        }
    }];
/*         const project = createProject("Default");
        addProject(project); */
    
    }
    return retrieveData
}


let projectsList = sessionLoad();
window.projectsList = projectsList;



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
            console.log(task)
            console.log(project)
            projectsList[project].addTask(task)
            let storageTask = JSON.stringify(projectsList)
            localStorage.test = storageTask;

              
            ui.closeTaskWindow();
        },

        submitProject(event){
            event.preventDefault();

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



createNewTaskButton.addEventListener('click', () => ui.openTaskWindow());
submitNewTaskButton.addEventListener('submit', (event) => ui.submitTask(event));
closeCreateTaskWindowButton.addEventListener('click', () => ui.closeTaskWindow());

createNewProjectButton.addEventListener('click', () => ui.openProjectWindow());
submitNewProjectButton.addEventListener('submit', (event) => ui.submitProject(event));
closeCreateProjectWindowButton.addEventListener('click', () => ui.closeProjectWindow());



function startUp(){
    ui.displayProjects();  }
startUp();



/* window.addEventListener("load", () => {
    projectsList = JSON.parse(localStorage.test)
 
}) */

/* function updateArray(){
    console.log(projectsList);
    projectsList = JSON.parse(localStorage.test);
    console.log(projectsList);
}

let test = updateArray();
window.test = test; */

