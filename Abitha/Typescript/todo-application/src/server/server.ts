import express from 'express';
import { v4 as uuidv4 } from 'uuid';
import cors from 'cors';
import { Todo, NewTodoRequest, UpdateTodoRequest } from './types';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

let todos: Todo[] = [];

app.get('/todos', (req, res) => {
  res.json(todos);
});

app.post('/todos', (req, res) => {
  const { text }: NewTodoRequest = req.body;
  const newTodo: Todo = {
    id: uuidv4(),
    text,
    completed: false,
  };
  todos.push(newTodo);
  res.status(201).json(newTodo);
});

app.put('/todos/:id', (req, res) => {
  const { id } = req.params;
  const { text, completed }: UpdateTodoRequest = req.body;
  const index = todos.findIndex(todo => todo.id === id);
  if (index !== -1) {
    if (text !== undefined) {
      todos[index].text = text;
    }
    if (completed !== undefined) {
      todos[index].completed = completed;
    }
    res.json(todos[index]);
  } else {
    res.status(404).json({ error: 'Todo not found' });
  }
});

app.delete('/todos/:id', (req, res) => {
  const { id } = req.params;
  todos = todos.filter(todo => todo.id !== id);
  res.sendStatus(204);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
