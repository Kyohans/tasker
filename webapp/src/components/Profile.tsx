import { Person } from "@mui/icons-material";
import { Paper, Typography } from "@mui/material";
import { Container } from "@mui/system";

const Profile = () => {
  return (
    <Container maxWidth = 'lg'>
      <Typography variant = 'h3' style = {{ textAlign: 'left' }}>
        <Person fontSize = 'large'/>
        User's Projects
      </Typography>
      <Paper elevation = {3} style = {{ lineHeight: '50px' }}>No Projects</Paper>
    </Container>
  )
}
export default Profile;
