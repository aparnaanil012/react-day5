import { Box,AppBar, Button, IconButton, Toolbar, Typography } from '@mui/material'
import React from 'react'
import {Link} from 'react-router-dom'
const Navigationbar = () => {

    return ( 

      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
      
            <Typography align='left' variant="h6" component="div" sx={{ flexGrow: 1 }}>
              StudentApp
            </Typography>
            < Button color='success'>
<Link to ='/' style={{color:'white',textdecoration:'none'}}>
    View
</Link>
            </Button>
        <Button color='success'><Link to ='/add' style ={{color:'white',textdecoration:'none'}}>
            Add
            </Link></Button>
          
          </Toolbar>
        </AppBar>
      </Box>

  )
}

export default Navigationbar
