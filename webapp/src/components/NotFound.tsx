import { Container, Typography } from "@mui/material"

const NotFound = () => {
  return (
    <Container maxWidth = 'md' sx = {{ paddingTop : '10rem' }}>
      <Typography variant = 'h2' fontWeight = '400'>Error 404: Not Found</Typography>
    </Container>
  )
}
export default NotFound;
