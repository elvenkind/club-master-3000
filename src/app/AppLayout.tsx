import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import { NavLink, Outlet } from 'react-router-dom'

export const AppLayout = () => {
  return (
    <Box className="min-h-screen bg-slate-50">
      <AppBar position="static">
        <Toolbar className="gap-3">
          <Typography variant="h6" className="mr-auto">
            Club Master 3000
          </Typography>
          <Button color="inherit" component={NavLink} to="/">
            Ehdotukset
          </Button>
          <Button color="inherit" component={NavLink} to="/calendar">
            Kalenteri
          </Button>
        </Toolbar>
      </AppBar>
      <Outlet />
    </Box>
  )
}
