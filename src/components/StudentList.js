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
        <h5 className='ls-2 mt-2 animate-charcter'>Favorite movie/series list</h5>
        <Table striped bordered hover variant="dark">
          <thead>
            <tr>
              <th className='ls-2 mt-2 animate-charcter-1'>number</th>
              <th className='ls-2 mt-2 animate-charcter-1'>advice</th>
              <th className='ls-2 mt-2 animate-charcter-1'>title</th>
              <th className='ls-2 mt-2 animate-charcter-1'>see at</th>
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
                </tr>
                ))}
          </tbody>
        </Table>
      </div>
    )
  }
}