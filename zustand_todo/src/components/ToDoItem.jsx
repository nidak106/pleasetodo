import { useState } from 'react';

export default function TodoItem({ todo, onDelete }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-white rounded p-3 shadow mb-3">
      {/* Clickable title */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full text-left text-lg font-semibold text-purple-600 hover:underline"
      >
        {todo.text}
      </button>

      {/* Expanded content */}
      {isOpen && (
        <div className="mt-2 text-sm text-gray-700">
          <p><strong>Description:</strong> {todo.text}</p>
          {todo.dueDateTime && (
            <p><strong>Due:</strong> {todo.dueDateTime}</p>
          )}
          <button
            onClick={() => onDelete(todo.id)}
            className="mt-2 bg-red-500 text-white px-3 py-1 rounded"
          >
            Delete
          </button>
        </div>
      )}
    </div>
  );
}
