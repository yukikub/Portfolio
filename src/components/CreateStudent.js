import React, { Component } from 'react'
import axios from 'axios'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { withRouter } from './common/with-router'
class CreateStudent extends Component {
    constructor(props){
        super (props)
        this.state ={
            advice:'',
            firstname:'',
            email:''    
        }
    } 
    onChangeStudentAdvice = (e) => {
        this.setState({ advice: e.target.value })
    }
    onChangeStudentFirstname = (e) => {
        this.setState({ firstname: e.target.value })       
    }
    onChangeStudentEmail = (e) => {
        this.setState({ email: e.target.value })    
    }
    onSubmit = (e) => {
        e.preventDefault()  
        const studentObject = {
            advice: this.state.advice,
            firstname: this.state.firstname,
            email: this.state.email
        }
        axios.post('http://localhost:5000/students/create-student', studentObject)
        .then(res => {
            console.log(res.data)
        })
        .catch(error => {
            console.log(error)
        })
        this.setState({advice:'', firstname:'', email:''})       
       this.props.router.navigate('/student-list')
        }
  render() {
    return (
      <div>
        <Form onSubmit={this.onSubmit}>
            <Form.Group>
                <Form.Label className='m-0 slide-In-Bottom'>Advice</Form.Label>
                <Form.Control type='text' value={this.state.advice} onChange={this.onChangeStudentAdvice}/>
            </Form.Group>
            <Form.Group>
                <Form.Label className='m-0 slide-In-Bottom'>Title</Form.Label>
                <Form.Control type='text'value={this.state.firstname} onChange={this.onChangeStudentFirstname}/>
            </Form.Group>
            <Form.Group>
                <Form.Label className='m-0 slide-In-Bottom'>See At</Form.Label>
                <Form.Control type='text'value={this.state.email} onChange={this.onChangeStudentEmail}/>
            </Form.Group>
            <Form.Group className="text-center mt-3">
                <Button className='m-0 slide-In-Bottom' variant='primary' type='submit'>
                record
                </Button> 
            </Form.Group>      
        </Form>
      </div>
    )
  }
}
export default  withRouter (CreateStudent)