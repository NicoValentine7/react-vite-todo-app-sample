    import { useState } from 'react';
    import {
        Container,
        TextField,
        Button,
        List,
        ListItem,
        ListItemText,
        IconButton,
        Typography,
        Paper,
    } from '@mui/material';
    import DeleteIcon from '@mui/icons-material/Delete';

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
            <Container maxWidth="sm" style={{ marginTop: '2rem' }}>
                <Paper elevation={3} style={{ padding: '2rem' }}>
                    <Typography variant="h4" align="center" gutterBottom>
                        TODOリスト
                    </Typography>
                    <TextField
                        variant="outlined"
                        label="新しいタスクを追加"
                        fullWidth
                        value={task}
                        onChange={(e) => setTask(e.target.value)}
                    />
                    <Button
                        variant="contained"
                        color="primary"
                        fullWidth
                        onClick={handleAddTask}
                        style={{ marginTop: '1rem' }}
                    >
                        タスクを追加
                    </Button>
                    <List style={{ marginTop: '2rem' }}>
                        {tasks.map((task, index) => (
                            <ListItem key={index} divider
                                secondaryAction={
                                    <IconButton edge="end" aria-label="delete" onClick={() => handleDeleteTask(index)}>
                                        <DeleteIcon />
                                    </IconButton>
                                }
                            >
                                <ListItemText primary={task} />
                            </ListItem>
                        ))}
                    </List>
                </Paper>
            </Container>
        );
    };

    export default TodoApp;
