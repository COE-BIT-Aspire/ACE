"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
document.addEventListener('DOMContentLoaded', () => {
    const todoInput = document.getElementById('todoInput');
    const addTodoButton = document.getElementById('addTodoButton');
    const todoList = document.getElementById('todoList');
    addTodoButton.addEventListener('click', () => __awaiter(void 0, void 0, void 0, function* () {
        const text = todoInput.value.trim();
        if (text !== '') {
            const response = yield fetch('http://localhost:3000/todos', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ text })
            });
            const newTodo = yield response.json();
            displayTodo(newTodo);
            todoInput.value = '';
        }
    }));
    const displayTodo = (todo) => {
        const li = document.createElement('li');
        li.innerText = todo.text;
        li.dataset.todoId = todo.id;
        if (todo.completed) {
            li.classList.add('completed');
        }
        li.addEventListener('click', () => __awaiter(void 0, void 0, void 0, function* () {
            const response = yield fetch(`http://localhost:3000/todos/${todo.id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ completed: !todo.completed })
            });
            const updatedTodo = yield response.json();
            li.classList.toggle('completed');
            todo.completed = updatedTodo.completed;
        }));
        todoList.appendChild(li);
    };
    const init = () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield fetch('http://localhost:3000/todos');
        const todos = yield response.json();
        todos.forEach(todo => displayTodo(todo));
    });
    init();
});
