const todoForm = document.querySelector("#todo form");
const todoInput = document.querySelector("#todo input");
const todoList = document.querySelector("#todo ul");

let todos = [];
const TODOS_KEY = "todos";

function saveTodos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(todos));
}

function deleteTodo(event) {
    const li = event.target.parentElement;
    li.remove();
    todos = todos.filter((todo) => todo.id !== JSON.parse(li.id));
    console.log(todos);
    saveTodos();
}

function paintTodo(newTodo) {
    const li = document.createElement("li");
    const span = document.createElement("span");
    const button = document.createElement("button");
    li.id = newTodo.id;
    li.appendChild(span);
    li.appendChild(button);
    span.innerText = newTodo.text;
    button.innerText = "×";
    todoList.appendChild(li);

    button.addEventListener("click", deleteTodo);
}

function handleTodoSubmit(event) {
    event.preventDefault();
    const newTodoOdj = {
        id: Date.now(),
        text: todoInput.value,
    };
    todos.push(newTodoOdj);
    todoInput.value = "";
    paintTodo(newTodoOdj);
    saveTodos();
}

const savedTodos = localStorage.getItem(TODOS_KEY);
if (savedTodos) {
    const parsedTodos = JSON.parse(savedTodos);
    todos = parsedTodos;
    parsedTodos.forEach(paintTodo);
}
todoForm.addEventListener("submit", handleTodoSubmit);