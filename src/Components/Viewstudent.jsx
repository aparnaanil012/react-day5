import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Viewstudent = () => {
    var[students,setStudents]=useState([])
    useEffect(()=>{
     axios.get(" http://localhost:3000/students") 
     .then(response=>{
        setStudents(students=response.data)
        console.log(response.data)
     }) 
   .catch(error=>console.log(error))
   },[])
  return (
    <div>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>id</TableCell>
              <TableCell>Name</TableCell>
              <TableCell >Grade</TableCell>
              
            </TableRow>
          </TableHead>
          <TableBody>
           {students.map((value,index)=>{
            return <TableRow key={index}>  
                   <TableCell>{value.id}</TableCell> 
                   <TableCell>{value.name}</TableCell> 
                  <TableCell>{value.grade}</TableCell>
                 
     </TableRow>
           })}

        </TableBody>
        </Table>
           
      </TableContainer>    
   
    </div>
  )
}

export default Viewstudent
