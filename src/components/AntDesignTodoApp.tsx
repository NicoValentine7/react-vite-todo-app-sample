import React, { useState, KeyboardEvent } from 'react';
import { Input, Button, List, Typography } from 'antd';
import { PlusOutlined, DeleteOutlined } from '@ant-design/icons';

const { Title } = Typography;

const AntDesignTodoApp: React.FC = () => {
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
    <div style={{ width: '100%' }}>
      <Title level={3} style={{ textAlign: 'center', color: '#ffffff' }}>TODO List (Ant Design)</Title>
      <div style={{ display: 'flex', marginBottom: 16 }}>
        <Input
          placeholder="Add new task"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          onKeyPress={handleKeyPress}
          style={{ marginRight: 8 }}
        />
        <Button type="primary" icon={<PlusOutlined />} onClick={handleAddTask} />
      </div>
      <List
        bordered
        dataSource={tasks}
        renderItem={(item, index) => (
          <List.Item
            actions={[
              <Button
                type="text"
                icon={<DeleteOutlined />}
                onClick={() => handleDeleteTask(index)}
                danger
              />
            ]}
          >
            {item}
          </List.Item>
        )}
      />
    </div>
  );
};

export default AntDesignTodoApp;