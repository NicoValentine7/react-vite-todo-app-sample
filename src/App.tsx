    import { useState } from 'react';

    const TodoApp = () => {
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
            <div className="max-w-md mx-auto mt-10">
                <h1 className="text-2xl font-bold mb-4">TODOリスト</h1>
                <input
                    type="text"
                    value={task}
                    onChange={(e) => setTask(e.target.value)}
                    className="border border-gray-300 p-2 w-full mb-2"
                    placeholder="新しいタスクを追加"
                />
                <button
                    onClick={handleAddTask}
                    className="bg-blue-500 text-white p-2 w-full"
                >
                    タスクを追加
                </button>
                <ul className="mt-4">
                    {tasks.map((task, index) => (
                        <li key={index} className="flex justify-between items-center border-b py-2">
                            <span>{task}</span>
                            <button
                                onClick={() => handleDeleteTask(index)}
                                className="text-red-500"
                            >
                                削除
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        );
    };

    export default TodoApp;
