import React, { useState, KeyboardEvent } from 'react';
import * as Checkbox from '@radix-ui/react-checkbox';
import { CheckIcon, Cross2Icon, PlusIcon } from '@radix-ui/react-icons';

const RadixTodoApp: React.FC = () => {
  const [tasks, setTasks] = useState<{ text: string; completed: boolean }[]>([]);
  const [task, setTask] = useState('');

  const handleAddTask = () => {
    if (task) {
      setTasks([...tasks, { text: task, completed: false }]);
      setTask('');
    }
  };

  const handleDeleteTask = (index: number) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  const handleToggleTask = (index: number) => {
    const newTasks = tasks.map((t, i) =>
      i === index ? { ...t, completed: !t.completed } : t
    );
    setTasks(newTasks);
  };

  const handleKeyPress = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter' && !event.shiftKey) {
      handleAddTask();
    } else if ((event.metaKey || event.ctrlKey) && event.key === 'Enter') {
      handleAddTask();
    }
  };

  return (
    <div className="w-full">
      <h2 className="text-2xl font-bold text-center mb-4">TODO List (Radix UI + Tailwind)</h2>
      <div className="flex mb-4">
        <input
          type="text"
          className="flex-grow border border-gray-300 rounded-l px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Add new task"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          onKeyPress={handleKeyPress}
        />
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded-r hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          onClick={handleAddTask}
        >
          <PlusIcon />
        </button>
      </div>
      <ul className="space-y-2">
        {tasks.map((item, index) => (
          <li key={index} className="flex items-center space-x-2 bg-gray-100 p-2 rounded">
            <Checkbox.Root
              className="flex h-5 w-5 items-center justify-center rounded bg-white border border-gray-300"
              checked={item.completed}
              onCheckedChange={() => handleToggleTask(index)}
            >
              <Checkbox.Indicator>
                <CheckIcon className="text-blue-500" />
              </Checkbox.Indicator>
            </Checkbox.Root>
            <span className={`flex-grow ${item.completed ? 'line-through text-gray-500' : ''}`}>
              {item.text}
            </span>
            <button
              className="text-red-500 hover:text-red-700"
              onClick={() => handleDeleteTask(index)}
            >
              <Cross2Icon />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RadixTodoApp;