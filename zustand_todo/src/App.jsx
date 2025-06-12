import { useState, useEffect } from 'react';
import { useTodoStore } from './store/store';
import TodoItem from './components/ToDoItem';

function App() {
  const [text, setText] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [dueTime, setDueTime] = useState('');
  const { todos, addTodo, removeTodo } = useTodoStore();

  const handleAdd = () => {
    if (text.trim() && dueDate && dueTime) {
      const dueDateTime = `${dueDate} ${dueTime}`;
      addTodo(text, dueDateTime);
      setText('');
      setDueDate('');
      setDueTime('');
    }
  };

  

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-md mx-auto bg-white p-6 rounded shadow">
        <h1 className="text-2xl font-bold mb-4 text-center">Zustand To-Do App</h1>

        <div className="flex flex-col gap-2 mb-4">
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="border border-gray-300 rounded px-2 py-1"
            placeholder="Enter a task"
          />
          <div className="flex gap-2">
            <input
              type="date"
              value={dueDate}
              onChange={(e) => setDueDate(e.target.value)}
              className="border border-gray-300 rounded px-2 py-1 flex-1"
            />
            <input
              type="time"
              value={dueTime}
              onChange={(e) => setDueTime(e.target.value)}
              className="border border-gray-300 rounded px-2 py-1 flex-1"
            />
          </div>
          <button
            onClick={handleAdd}
            className="bg-blue-500 text-white px-4 py-1 rounded"
          >
            Add
          </button>
        </div>

        <div>
          {todos.length === 0 && <p className="text-center text-gray-400">No tasks yet</p>}
          {todos.map((todo) => (
            <TodoItem key={todo.id} todo={todo} onDelete={removeTodo} />
          ))}
        </div>

        
      </div>
    </div>
  );
}

export default App;
