import React, { useState, KeyboardEvent } from 'react';
import {
  Box, VStack, Heading, Input, Button, List, ListItem, Flex, Text, IconButton,
} from '@chakra-ui/react';
import { AddIcon, DeleteIcon } from '@chakra-ui/icons';

const ChakraTodoApp: React.FC = () => {
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
    <Box width="100%">
      <VStack spacing={4} align="stretch">
        <Heading as="h2" size="lg" textAlign="center">
          TODO List (Chakra UI)
        </Heading>
        <Flex>
          <Input
            placeholder="Add new task"
            value={task}
            onChange={(e) => setTask(e.target.value)}
            onKeyPress={handleKeyPress}
            mr={2}
          />
          <IconButton
            aria-label="Add task"
            icon={<AddIcon />}
            colorScheme="blue"
            onClick={handleAddTask}
          />
        </Flex>
        <List spacing={3}>
          {tasks.map((task, index) => (
            <ListItem key={index} p={2} bg="gray.100" borderRadius="md">
              <Flex justify="space-between" align="center">
                <Text>{task}</Text>
                <IconButton
                  aria-label="Delete task"
                  icon={<DeleteIcon />}
                  colorScheme="red"
                  size="sm"
                  onClick={() => handleDeleteTask(index)}
                />
              </Flex>
            </ListItem>
          ))}
        </List>
      </VStack>
    </Box>
  );
};

export default ChakraTodoApp;