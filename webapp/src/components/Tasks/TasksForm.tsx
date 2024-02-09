import { Dialog, DialogTitle, Typography } from "@mui/material";


interface TasksFormProps {
  project_id: string | undefined,
  openModal: boolean,
  setOpenModal: Function
}

const TasksForm = ({project_id, openModal, setOpenModal}: TasksFormProps) => {

  const handleClose = () => setOpenModal(false);

  return (
    <Dialog open = {openModal} onClose = {handleClose}>
      <DialogTitle>
        {project_id} {openModal}
      </DialogTitle>
    </Dialog>
  )
}
export default TasksForm;
