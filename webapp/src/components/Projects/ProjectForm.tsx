import { 
  Button, 
  Dialog, 
  DialogActions, 
  DialogContent, 
  DialogTitle, 
  IconButton, 
  TextField, 
  Typography 
} from "@mui/material";

import CloseIcon from '@mui/icons-material/Close';
import { FormEvent } from "react";

interface ProjectFormProps {
  openModal: boolean;
  setOpenModal: Function;
}

const ProjectForm = ({ openModal, setOpenModal }: ProjectFormProps) => {
  
  const handleClose = () => {
    setOpenModal(false);
  }

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log('Data submitted!');
    const formData = new FormData(event.currentTarget);
    const formJson = Object.fromEntries((formData as any).entries());
    console.log(formJson);
    handleClose();
  }

  return (
    <Dialog open = {openModal} onClose = {handleClose} PaperProps = {{
      component: 'form',
      onSubmit: onSubmit
    }}>
      <DialogTitle>New Project</DialogTitle>
      <DialogContent>
        <TextField required id = 'project_name' name = 'project_name' type = 'text' label = 'Project Name'/>
      </DialogContent>
      <DialogActions>
        <Button type = 'submit'>Create</Button>
        <IconButton onClick = {handleClose}><CloseIcon/></IconButton>
      </DialogActions>

    </Dialog>
  )
}
export default ProjectForm;
