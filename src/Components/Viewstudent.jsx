import { Button, Tab, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Add from './Add';


const Viewstudent = () => {
  var [update, setUpdate] = useState(false)
  var [selected, setSelected] = useState([])
  var [students, setStudents] = useState([])

  useEffect(() => {
    axios.get("http://localhost:3005/students/")
      .then(response => {
        setStudents(students = response.data)
        console.log(students)
      })
      .catch(error => console.log(error))
  }, [])
  const updateValues = (value) => {
    setSelected(value);
    setUpdate(true);
  }
  const deleteValues = (id) => {
    console.log("delete clicked" + id)
    axios.delete(" http://localhost:3005/students/" + id)
      .then((response) => {
        console.log(response.idvalue);
      })
  }
  var finalJSX = <TableContainer>
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>id</TableCell>
          <TableCell>name</TableCell>
          <TableCell>grade</TableCell>
          <TableCell>Update</TableCell>
          <TableCell>delete</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>

        {students.map((value, index) => {
          return <TableRow key={index}>
            <TableCell>{value.id}</TableCell>
            <TableCell>{value.name}</TableCell>
            <TableCell>{value.grade}</TableCell>
            <TableCell>{value.update}</TableCell>
            <TableCell>{value.delete}</TableCell>

            <TableCell>
              <Button
                color='success'
                onClick={() => updateValues(value)}>Update</Button>
            </TableCell>
            <TableCell>
              <Button
                color='error'
                onClick={() => deleteValues(value.id)}>Delete</Button>
            </TableCell>

          </TableRow>
        })}

      </TableBody>
    </Table>

  </TableContainer>
  if (update)
    finalJSX = <Add data={selected} method="put" />
  return (
    <div>

      <br>
      </br>
      <br></br>
      {finalJSX}
    </div>
  )
}

export default Viewstudent
