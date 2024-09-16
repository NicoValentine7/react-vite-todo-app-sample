import React, { useState } from 'react';
import { Button, TextInput, List, Text, Group, Box } from '@mantine/core';
import { IconPlus } from '@tabler/icons-react';

const MantineTodoApp: React.FC = () => {
  const [todos, setTodos] = useState<string[]>([]);
  const [input, setInput] = useState('');

  const addTodo = () => {
    if (input.trim()) {
      setTodos([...todos, input.trim()]);
      setInput('');
    }
  };

  const removeTodo = (index: number) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  return (
    <Box>
      <Text size="xl" fw={700} mb="md">Mantine Todo App</Text>
      <Group mb="md">
        <TextInput
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="新しいタスクを入力"
          style={{ flex: 1 }}
          className="bg-gray-700 text-white"
        />
        <Button onClick={addTodo} leftSection={<IconPlus size={14} />} className="bg-netflixRed">
          追加
        </Button>
      </Group>
      <List>
        {todos.map((todo, index) => (
          <List.Item key={index}>
            {todo}
            <Button
              variant="subtle"
              color="red"
              size="xs"
              onClick={() => removeTodo(index)}
              ml="xs"
            >
              削除
            </Button>
          </List.Item>
        ))}
      </List>
    </Box>
  );
};

export default MantineTodoApp;