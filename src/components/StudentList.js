import React, { Component } from 'react'
import axios from 'axios'
import  Table  from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button'
import {Link} from 'react-router-dom'
export default class Studentlist extends Component {
  constructor(props){
    super(props)
    this.state = {
      students: []
    }
  }
    componentDidMount(){
      this.getAllStudentS()
    }
    getAllStudentS(){
      axios.get('http://localhost:5000/students/')
      .then(res => {
        this.setState({
          students: res.data
        })
      }).catch((error)=>{ console.log(error)})
    }
    deteteStudent = (id) => {axios.delete('http://localhost:5000/students/delete-student/' + id).then((res) => {this.getAllStudentS()
  }).catch((error)=>{ console.log(error)})
 } 
  render() {
    return (
      <div>
        <h5 className='ls-2 mt-2 animate-charcter'>คำแนะนำที่มี</h5>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th className='ls-2 mt-2 animate-charcter-1'>ลำดับที่</th>
              <th className='ls-2 mt-2 animate-charcter-1'>คำแนะนำ</th>
              <th className='ls-2 mt-2 animate-charcter-1'>ชื่อ</th>
              <th className='ls-2 mt-2 animate-charcter-1'>อีเมลล์</th>
            </tr>
          </thead>
          <tbody>
            {
              this.state.students.map((res,index) => (
                <tr key={res._id}>
                  <td className='m-0 slide-In-Bottom'>{index + 1}</td>
                  <td className='m-0 slide-In-Bottom'>{res.advice}</td>
                  <td className='m-0 slide-In-Bottom'>{res.firstname}</td>
                  <td className='m-0 slide-In-Bottom'>{res.email}</td>
                  {/* <td>
                    <Link className='btn btn-warning sm' to={"/edit-student/" + res._id}>Edit</Link> 
                    {' '}
                    <Button className='btn btn-danger sm' onClick={() => { window.confirm('Are you sure delete?') && 
                    this.deteteStudent(res._id)}}>Delete</Button>
                  </td> */}
                </tr>
                ))}
          </tbody>
        </Table>
      </div>
    )
  }
}