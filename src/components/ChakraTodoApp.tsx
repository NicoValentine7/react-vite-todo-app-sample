import React, { useState } from 'react';
import {
  Box,
  VStack,
  Heading,
  Input,
  Button,
  List,
  ListItem,
  Flex,
  Text,
} from '@chakra-ui/react';

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
            mr={2}
          />
          <Button colorScheme="blue" onClick={handleAddTask}>
            Add Task
          </Button>
        </Flex>
        <List spacing={3}>
          {tasks.map((task, index) => (
            <ListItem key={index} p={2} bg="gray.100" borderRadius="md">
              <Flex justify="space-between" align="center">
                <Text>{task}</Text>
                <Button
                  onClick={() => handleDeleteTask(index)}
                  colorScheme="red"
                  size="sm"
                >
                  Delete
                </Button>
              </Flex>
            </ListItem>
          ))}
        </List>
      </VStack>
    </Box>
  );
};

export default ChakraTodoApp;