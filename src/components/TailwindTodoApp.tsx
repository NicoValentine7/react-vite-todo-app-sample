import React, { useState } from 'react';

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

    return (
        <div className="w-full">
            <div className="bg-white shadow-md rounded px-4 py-4">
                <h2 className="text-xl font-bold text-center mb-4">TODO List (Tailwind)</h2>
                <div className="mb-4">
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="text"
                        placeholder="Add new task"
                        value={task}
                        onChange={(e) => setTask(e.target.value)}
                    />
                </div>
                <div className="flex items-center justify-between">
                    <button
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
                        onClick={handleAddTask}
                    >
                        Add Task
                    </button>
                </div>
                <ul className="mt-4">
                    {tasks.map((task, index) => (
                        <li key={index} className="flex items-center justify-between bg-gray-100 px-4 py-2 mt-2 rounded">
                            <span>{task}</span>
                            <button
                                onClick={() => handleDeleteTask(index)}
                                className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded"
                            >
                                Delete
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default TailwindTodoApp;