import AddIcon from '@mui/icons-material/Add';
import { Box, Button, Container, Typography } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import axios from 'axios';
import { useEffect, useState } from "react";
import ProjectForm from "./ProjectForm";

const titlebar_styles = {
  display: 'flex',
  alignItems: 'center',
  paddingBottom: '.5rem',
}

const ProjectList = () => {
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [projects, setProjects] = useState<Array<any>>([]);
  const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', type: 'number', width: 40 },
    { field: 'project_name', headerName: 'Name', width: 130 },
    { field: 'managed_by', headerName: 'Managed By', width: 170 },
    { field: 'created_at', headerName: 'Created At', type: 'string', width: 70 },
  ]

  useEffect(() => {
    axios.get('http://localhost:5000/users').then((response) => {
      setProjects(response.data);
      console.log(typeof(projects));
    })
  },[]);
  
  return (
    <Container maxWidth = 'lg' sx = {{ paddingTop: '3rem' }}>
      <Box sx = {titlebar_styles}>
        <Typography variant = 'h5'>Projects</Typography>
        <Button sx = {{ marginLeft: 'auto' }} variant = 'outlined' startIcon = {<AddIcon/>} onClick = {() => setOpenModal(true)}>New</Button>
      </Box>
      <DataGrid
        rows = {projects}
        columns = {columns}
      />

      <ProjectForm openModal = {openModal} setOpenModal = {setOpenModal}/>
    </Container>
  )
}
export default ProjectList;
