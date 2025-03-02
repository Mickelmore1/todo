const container = document.getElementById('task-container')


export const createCard = (task) => {
    const card = document.createElement('div');
    card.className = "task";
    card.innerHTML = `
        <div>
            <h1>${task.title}</h1>
            <button class="add">+</button>
        </div>
        <p>${task.description}</p>
        <p>${task.dueDate}</p>`
    
    container.appendChild(card);  
    console.log(task);  
}

