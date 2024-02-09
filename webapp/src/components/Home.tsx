import { ViewListRounded } from '@mui/icons-material';
import { Button, Typography } from '@mui/material';
import { Container } from '@mui/system';

const Home = () => {
  return (
    <Container maxWidth = 'md' className = 'center-content'>
      <Typography variant = 'h1' fontWeight = '400'>Tasker</Typography>
      <Typography variant = 'subtitle1' fontWeight = '200' gutterBottom>Project and Task Manager</Typography>
      <Button href = 'projects' variant = 'contained' startIcon = {<ViewListRounded/>}>
        Projects
      </Button>
    </Container>
  )
}
export default Home;
