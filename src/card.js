export const createCard = (toDo) => {
    const container = document.getElementById('to-do-container')
    const div = document.createElement('div');
    
    div.className = "to-do";
    div.innerHTML = `
        <div>
            <h1>${toDo.title}</h1>
            <button class="add">+</button>
        </div>
        <p>${toDo.description}</p>
        <p>${toDo.dueDate}</p>`
    
    container.append(div);     
}

export const expandToDoCard = () => {
    document.querySelectorAll('.add').forEach(button => {
        button.addEventListener('click', () => {
            console.log("yes")
            button.closest(".to-do").style.backgroundColor = "red";

        
        })
    })


    
}

