import React, { useState, KeyboardEvent } from 'react';
import { PlusIcon, TrashIcon } from '@heroicons/react/24/solid';

const TailwindTodoApp: React.FC = () => {
    const [tasks, setTasks] = useState<string[]>([]);
    const [task, setTask] = useState('');

    const handleAddTask = () => {
        if (task) {
            setTasks([...tasks, task]);
            setTask('');
        }
    };

    const handleDeleteTask = (index: number) => {
        const newTasks = tasks.filter((_, i) => i !== index);
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
            <div className="bg-white shadow-md rounded px-4 py-4">
                <h2 className="text-xl font-bold text-center mb-4 text-gray-900">TODO List (Tailwind)</h2>
                <div className="mb-4 flex">
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="text"
                        placeholder="Add new task"
                        value={task}
                        onChange={(e) => setTask(e.target.value)}
                        onKeyPress={handleKeyPress}
                    />
                    <button
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ml-2"
                        onClick={handleAddTask}
                    >
                        <PlusIcon className="h-5 w-5" />
                    </button>
                </div>
                <ul className="mt-4">
                    {tasks.map((task, index) => (
                        <li
                            key={index}
                            className="flex items-center justify-between bg-gray-800 text-white px-4 py-2 mt-2 rounded"
                        >
                            <span>{task}</span>
                            <button
                                onClick={() => handleDeleteTask(index)}
                                className="text-red-500 hover:text-red-700"
                            >
                                <TrashIcon className="h-5 w-5" />
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default TailwindTodoApp;