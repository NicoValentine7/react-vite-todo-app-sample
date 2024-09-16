import React, { useState } from 'react';
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
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { CacheProvider } from '@emotion/react';
import createEmotionCache from '../createEmotionCache';

const muiCache = createEmotionCache();
const theme = createTheme();

const MUITodoApp: React.FC = () => {
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
        <CacheProvider value={muiCache}>
            <ThemeProvider theme={theme}>
                <Container maxWidth={false} disableGutters>
                    <Paper elevation={3} style={{ padding: '1rem' }}>
                        <Typography variant="h5" align="center" gutterBottom>
                            TODO List (MUI)
                        </Typography>
                        <TextField
                            variant="outlined"
                            label="Add new task"
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
                            Add Task
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
            </ThemeProvider>
        </CacheProvider>
    );
};

export default MUITodoApp;