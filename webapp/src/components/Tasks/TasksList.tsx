import { DataGrid, GridColDef } from '@mui/x-data-grid';
import AddIcon from '@mui/icons-material/Add';
import { Box, Button, Container, Typography } from '@mui/material';
import { useState } from 'react';
import TasksForm from './TasksForm';
import { useParams } from 'react-router-dom';

const TasksList = () => {
  const [openModal, setOpenModal] = useState<boolean>(false);
  const params = useParams();

  const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', type: 'number', width: 40 },
    { field: 'title', headerName: 'Title', width: 130 },
    { field: 'description', headerName: 'Description', width: 170 },
    { field: 'due', headerName: 'Due Date', type: 'string', width: 70 },
    { field: 'priority', headerName: 'Priority', type: 'number', width: 40 },
    { field: 'completed', headerName: 'Completed', type: 'boolean', width: 70 },
  ]

  const tasks: Array<any> = [
    { id: 1, title: 'Get groceries', description: 'At HEB', due_date: Date.now(), priority: 1, completed: false },
    { id: 2, title: 'Finish documents', description: 'For work', due_date: Date.now(), priority: 3, completed: false },
    { id: 3, title: 'Look after Mellorine', description: 'Pet cat', due_date: Date.now(), priority: 2, completed: true },
  ];

  return (
    <Container className = 'center-content' maxWidth = 'lg'>
      <Box sx = {{ display: 'flex' }}>
        <Typography variant = 'h4'>Project Tasks</Typography>
        <Button onClick = {() => setOpenModal(true)} startIcon = {<AddIcon/>} variant = 'outlined' sx = {{ marginLeft: 'auto' }}>New Task</Button>
      </Box>
      <DataGrid
        rows = {tasks}
        columns = {columns}
        initialState = {{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions = {[5, 10]}
      />
      <TasksForm project_id = {params.id} openModal = {openModal} setOpenModal = {setOpenModal}/>
    </Container>
  )
}
export default TasksList;
