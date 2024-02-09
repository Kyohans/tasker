import { AppBar, Button, Link, Toolbar } from "@mui/material"
import HomeRoundedIcon from '@mui/icons-material/HomeRounded'
import { Outlet } from "react-router-dom";

const Header = () => {
  return (
    <>
      <AppBar position = 'static'>
        <Toolbar>
          <Link href = '/' color = 'inherit'>
            <HomeRoundedIcon sx = {{ fontSize: 40 }}/>
          </Link>
          <Button color = 'inherit' variant = 'text' href = 'projects'>Projects</Button>
        </Toolbar>
      </AppBar>
      <Outlet/>
    </>
  )
}
export default Header;
