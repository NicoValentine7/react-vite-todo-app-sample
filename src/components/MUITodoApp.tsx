import React, { useState, KeyboardEvent } from 'react';
import {
    Container,
    TextField,
    List,
    ListItem,
    ListItemText,
    IconButton,
    Typography,
    Paper,
    Box,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
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

    const handleKeyPress = (event: KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter' && !event.shiftKey) {
            handleAddTask();
        } else if ((event.metaKey || event.ctrlKey) && event.key === 'Enter') {
            handleAddTask();
        }
    };

    return (
        <CacheProvider value={muiCache}>
            <ThemeProvider theme={theme}>
                <Container maxWidth={false} disableGutters>
                    <Paper elevation={3} style={{ padding: '1rem' }}>
                        <Typography variant="h5" align="center" gutterBottom>
                            TODO List (MUI)
                        </Typography>
                        <Box display="flex" alignItems="center" mb={2}>
                            <TextField
                                variant="outlined"
                                label="Add new task"
                                fullWidth
                                value={task}
                                onChange={(e) => setTask(e.target.value)}
                                onKeyPress={handleKeyPress}
                            />
                            <IconButton
                                color="primary"
                                onClick={handleAddTask}
                                style={{ marginLeft: '0.5rem' }}
                            >
                                <AddIcon />
                            </IconButton>
                        </Box>
                        <List>
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