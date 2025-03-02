import "./reset.css";
import "./style.css";

import { createCard, expandToDoCard } from './card.js';





let toDoList = [];
let projectList = [];

class ToDo {
    constructor(title, description, dueDate, priority, projectID){
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.projectID = projectID;
    }
}

class Project {
    constructor(title, description, id){
        this.title = title;
        this.description = description;
        this.id = id;
    }
}
    

function addToDo(title, description, dueDate, priority, projectID){
  toDoList.push(new ToDo(title, description, dueDate, priority, projectID));
}

function addProject(title, description, id){
    projectList.push(new Project(title, description, id));
}


function retrieveProjectList(project) {
    return toDoList.filter(toDo => toDo.projectID == project.id);
}

const container = document.getElementById('to-do-container');


function displayToDo(){
    toDoList.forEach(toDo => {
        createCard(toDo);        
    });
}





addToDo("Washing Up", "Turn on the dishwasher", "1", "0", "0");
addToDo("Laundry", "2", "2", "0", "0");
addToDo("3", "3", "3", "1", "1");
addToDo("4", "4", "4", "0", "0");

addProject("proj1","proj1","0")
addProject("proj2","proj2","1")
addProject("proj3","proj3","2")

displayToDo();
expandToDoCard();



////window.addToDo = (title,description,dueDate,priority) => addToDo(title,description,dueDate,priority);
//window.consoleLog = () => console.log(toDoList);










function test(){
    console.log("hello")
}

test();

