interface Todo {
    id: string;
    text: string;
    completed: boolean;
  }
  
  document.addEventListener('DOMContentLoaded', () => {
    const todoInput = document.getElementById('todoInput') as HTMLInputElement;
    const addTodoButton = document.getElementById('addTodoButton') as HTMLButtonElement;
    const todoList = document.getElementById('todoList') as HTMLUListElement;
  
    addTodoButton.addEventListener('click', async () => {
      const text = todoInput.value.trim();
      if (text !== '') {
        const response = await fetch('http://localhost:3000/todos', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ text })
        });
        const newTodo = await response.json() as Todo;
        displayTodo(newTodo);
        todoInput.value = '';
      }
    });
  
    const displayTodo = (todo: Todo) => {
      const li = document.createElement('li');
      li.innerText = todo.text;
      li.dataset.todoId = todo.id;
      if (todo.completed) {
        li.classList.add('completed');
      }
      li.addEventListener('click', async () => {
        const response = await fetch(`http://localhost:3000/todos/${todo.id}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ completed: !todo.completed })
        });
        const updatedTodo = await response.json() as Todo;
        li.classList.toggle('completed');
        todo.completed = updatedTodo.completed;
      });
      todoList.appendChild(li);
    };
  
    const init = async () => {
      const response = await fetch('http://localhost:3000/todos');
      const todos = await response.json() as Todo[];
      todos.forEach(todo => displayTodo(todo));
    };
  
    init();
  });
  