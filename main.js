//Selectors

const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");


//Event Listeners

todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click',deleteCheck);

//Functions

function addTodo(event){
    event.preventDefault();

    //Create Todo Div
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");

    //Create li
    const todoItem = document.createElement("li");
    todoItem.innerText=todoInput.value;
    todoItem.classList.add("todo-item");
    todoDiv.appendChild(todoItem);

    //complete btn
    const completeButton = document.createElement("button");
    completeButton.innerHTML='<i class="fas fa-check"></i>';
    completeButton.classList.add("complete-btn");
    todoDiv.appendChild(completeButton);

    //delete btn
    const trashButton = document.createElement("button");
    trashButton.innerHTML='<i class="fas fa-trash"></i>';
    trashButton.classList.add("delete-btn");
    todoDiv.appendChild(trashButton);

    //Append to List
    todoList.appendChild(todoDiv);

    //Clear input
    todoInput.value="";
}


function deleteCheck(e){
    const item=e.target;

    //Delete a list
    if(item.classList[0] === "delete-btn"){
        const todo=item.parentElement;
        todo.classList.add("fall");
        todo.addEventListener('transitionend',function(){
            todo.remove();
        }); 
    }

    //Mark Complete
    if(item.classList[0] === "complete-btn"){
        const todo = item.parentElement;
        todo.classList.toggle("completed");
    }
}