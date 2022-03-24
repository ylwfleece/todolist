// CONST
const domSeletors = {
    'todolistHeader': '.todolist__header',
    'todolistContent': '.todolist__content',
}


// Data
const title = "My To Do List";
const submitText = "Add";
let todos = [{
    "userId": 1,
    "id": 1,
    "title": "Hit the gym",
    "completed": false
}, {
    "userId": 1,
    "id": 2,
    "title": "sdfasf aut autem",
    "completed": false
}, {
    "userId": 1,
    "id": 3,
    "title": "sdfsafsadf aut autem",
    "completed": true
}, {
    "userId": 1,
    "id": 4,
    "title": "dfdsfsafasfs aut autem",
    "completed": false
}]

function addTodo(todo) {
    // add new todo to todos array
    // re-render todolist


}

function deletTodo(id) {
    todos = todos.filter(todo => todo.id !== id);
}

function generateHeaderContent(title, submitText) {
    return `<h1 class="todolist__header__title">${title}</h1>
    <div class="input-bar">
        <input class="input-bar__input"/>
        <button class="input-bar__submit">${submitText}</button>
    </div>`
}


function generateTodoItem(todo) {
    return `<li id="todo-${todo.id}" class="todolist__content__row">
    <span class="todolist__content__item">${todo.title}</span>
    <button  class="todolist__content__action" >X</button>
</li>`
}

function generateTodoList(todos) {
    return todos.map(todo => generateTodoItem(todo)).join('')
}


function renderHeader(title, submitText) {
    const ele = document.querySelector(domSeletors.todolistHeader)
    const tmp = generateHeaderContent(title, submitText)
    render(ele, tmp)
}

function renderTodoList(todos) {
    const tmp = generateTodoList(todos);
    const ele = document.querySelector(domSeletors.todolistContent);
    render(ele, tmp)
}

function render(element, template) {
    element.innerHTML = template;
}

function setUpEvent() {
    document.querySelector(domSeletors.todolistContent).addEventListener('click', (e) => {
        if (isDeleteButton(e.target)) {
            const id = getTodoIdFromBtn(e.target);
            deletTodo(id);
            renderTodoList(todos);
        }
    })

    document.querySelector('.input-bar__submit').addEventListener('click', (e) => {
        console.log("click add")
        let title = document.querySelector('.input-bar__input').value;
        console.log(title)
        let item =
        {
            "userId": 1,
            "id": (todos.length + 1),
            "title": title,
            "completed": false
        }
        todos.push(item);
        console.log(todos);
        generateTodoList(todos);
        renderTodoList(todos);
    })
}

function getTodoIdFromBtn(btnElement) {
    return +(btnElement.parentElement.id.substring(5))
}

function isDeleteButton(element) {
    return element.classList.contains('todolist__content__action')
}


// init
renderHeader(title, submitText);
renderTodoList(todos);

// init Event
setUpEvent();

