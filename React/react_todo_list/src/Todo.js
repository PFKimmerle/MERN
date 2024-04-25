import React from 'react';

// Todo functional component accepting props
function Todo({ todo, handleToggleComplete, handleTodoDelete }) {
    // Base CSS class for a todo item
    const todoClasses = ['todo-item'];
    // Add 'completed' class if todo is completed for conditional styling
    if (todo.completed) {
        todoClasses.push('completed');
    }

    // JSX to render each todo item
    return (
        <div className={todoClasses.join(' ')}> {/* Combine classes into a single string */}
            <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => handleToggleComplete(todo.id)} // Toggle todo complete status on change
            />
            <span className="todo-text">{todo.text}</span> {/* Display todo text */}
            <button 
                onClick={() => handleTodoDelete(todo.id)} // Delete todo on button click
                className="delete-button"
            >
                Delete
            </button>
        </div>
    );
}

export default Todo; // Export Todo component for use in other parts of the app
