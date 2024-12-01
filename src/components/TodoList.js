import React, { useState } from 'react';

function TodoList() {
    const [todos, setTodos] = useState([]);
    const [inputValue, setInputValue] = useState('');

    function handleInputChange(event) {
        setInputValue(event.target.value);
    }

    function handleSubmit() {
        if (inputValue.trim()) {
            setTodos([...todos, { text: inputValue.trim(), completed: false }]);
            setInputValue('');
        }
    }

    function handleDelete(index) {
        setTodos(todos.filter((_, i) => i !== index));
    }

    function toggleCompletion(index) {
        setTodos(
            todos.map((todo, i) =>
                i === index ? { ...todo, completed: !todo.completed } : todo
            )
        );
    }

    return (
        <div>
            <input type="text" value={inputValue} onChange={handleInputChange} />
            <button onClick={handleSubmit}>Add To-do Item</button>
            <ul>
                {todos.map((todo, index) => (
                    <li
                        key={index}
                        style={{
                            textDecoration: todo.completed ? 'line-through' : 'none',
                            color: todo.completed ? 'gray' : 'black',
                        }}
                    >
                        {todo.text}
                        <button onClick={() => toggleCompletion(index)}>
                            {todo.completed ? 'Undo' : 'Complete'}
                        </button>
                        <button onClick={() => handleDelete(index)}>
                            Remove To-do Item
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default TodoList;
