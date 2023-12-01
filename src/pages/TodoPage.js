import React, { useEffect, useState } from 'react';
import TodoService from '../services/TodoService';

const TodoPage = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const response = await TodoService.getAllTodos(); // You need to implement this service
        setTodos(response.data);
      } catch (error) {
        console.error('Error fetching todos', error);
        // Handle error, show a message, or redirect to another page
      }
    };

    fetchTodos();
  }, []);

  return (
    <div>
      <h1>Todo Page</h1>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <strong>{todo.title}</strong>: {todo.details}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoPage;
