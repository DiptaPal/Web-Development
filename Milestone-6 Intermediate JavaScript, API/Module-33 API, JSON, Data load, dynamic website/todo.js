const loadTodo = () => {
    const url = "https://jsonplaceholder.typicode.com/todos";
    fetch(url)
        .then((response) => response.json())
        .then((data) => displayTodo(data));
};

const displayTodo = (todos) => {
    // 1. get container
    const todoContainer = document.getElementById("todo-container");

    todos.forEach((todo) => {
        const todoCard = document.createElement("div");
        todoCard.innerHTML = `
            <div class="todo-card">
                <p>${
                    todo.completed === true
                        ? `<i class="fa-solid fa-square-check"></i>`
                        : `<i class="fa-regular fa-square-check"></i>`
                }</p>  
                <h4>${todo.title}</h4>
            </div>
        `;

        todoContainer.append(todoCard);
    });
};

loadTodo();
