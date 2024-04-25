// Import components
import React, { useState } from 'react';
import './App.css';
import Todo from './Todo';
import Calendar from './Calendar';

// App component
function App() {
// State for the new task input
const [newTask, setNewTask] = useState('');
// State for the list of tasks
const [tasks, setTasks] = useState([]);

// Handler to update state with new task input
const handleNewTaskChange = (e) => {
    setNewTask(e.target.value);
};

// Function to add a new task
const addTask = (taskText) => {
    const newTask = {
        id: Date.now(), // unique id based on timestamp
        text: taskText,
        completed: false
    };
    setTasks([...tasks, newTask]);
};

// Handler for adding task on button click
const handleAddTaskClick = () => {
    if (newTask.trim()) {
        addTask(newTask.trim());
        setNewTask(''); // Clear input after adding
    }
};

// Handler to toggle task completion status
const handleToggleComplete = (taskId) => {
    setTasks(tasks.map(task => {
        if (task.id === taskId) {
            return { ...task, completed: !task.completed };
        }
        return task; // This line should be inside the map function's callback
    }));
};


// Handler to delete a task
const handleTodoDelete = (taskId) => {
    setTasks(tasks.filter(task => task.id !== taskId));
};

// Render the app component
return (
    <div className="app">
    <header className="todo-list-header">
        <h1>To Do List</h1>
    </header>
    <div className="todo-list-container">
        <input
        value={newTask}
        onChange={handleNewTaskChange}
        type="text"
        placeholder="Add a new task"
        />
        <button onClick={handleAddTaskClick}>+</button>
        {tasks.map(todo => (
        <Todo
            key={todo.id}
            todo={todo}
            handleToggleComplete={handleToggleComplete}
            handleTodoDelete={handleTodoDelete}
        />
        ))}
    </div>
    <div className="calendar-container">
        <Calendar />
    </div>
    </div>
);
}

// Export App component
export default App;
