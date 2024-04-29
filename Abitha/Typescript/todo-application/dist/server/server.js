"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const uuid_1 = require("uuid");
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
const PORT = process.env.PORT || 3000;
app.use((0, cors_1.default)());
app.use(express_1.default.json());
let todos = [];
app.get('/todos', (req, res) => {
    res.json(todos);
});
app.post('/todos', (req, res) => {
    const { text } = req.body;
    const newTodo = {
        id: (0, uuid_1.v4)(),
        text,
        completed: false,
    };
    todos.push(newTodo);
    res.status(201).json(newTodo);
});
app.put('/todos/:id', (req, res) => {
    const { id } = req.params;
    const { text, completed } = req.body;
    const index = todos.findIndex(todo => todo.id === id);
    if (index !== -1) {
        if (text !== undefined) {
            todos[index].text = text;
        }
        if (completed !== undefined) {
            todos[index].completed = completed;
        }
        res.json(todos[index]);
    }
    else {
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
