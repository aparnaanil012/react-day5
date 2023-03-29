import { Button, TextField } from '@mui/material'
import React from 'react'

const Addstudent = () => {
  return (
    <div><br></br><br></br><center>
     <TextField label="name"></TextField><br></br>
     <TextField label="grade"></TextField><br></br>
     <Button varient="contained">Submit</Button>
     </center>
    </div>
  )
}

export default Addstudent
