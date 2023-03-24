import React, { Component } from 'react'
import axios from 'axios'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { withRouter } from './common/with-router'
 class EditStudent extends Component {
    constructor(props){
        super (props)
        this.state ={
            advice:'',
            firstname:'',
            email:''
        }
    } 
    componentDidMount() {
        axios.get('http://localhost:5000/students/edit-student/' +this.props.router.params.id)
        .then(res => {
            this.setState({
                advice: res.data.advice,
                firstname: res.data.firstname,
                email: res.data.email
            })
            .catch((error) => {
                console.log(error)
            })
        })
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
        axios.put('http://localhost:5000/students/update-student/' +this.props.router.params.id, studentObject)
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
                <Form.Label>Advice</Form.Label>
                <Form.Control type='text' value={this.state.advice} onChange={this.onChangeStudentAdvice}/>
            </Form.Group>
            <Form.Group>
                <Form.Label>Firstname</Form.Label>
                <Form.Control type='text'value={this.state.firstname} onChange={this.onChangeStudentFirstname}/>
            </Form.Group>
            <Form.Group>
                <Form.Label>Email</Form.Label>
                <Form.Control type='email'value={this.state.email} onChange={this.onChangeStudentEmail}/>
            </Form.Group>
            <Form.Group className="text-center mt-3">
                <Button variant='primary' type='submit'>
                    Update
                </Button> 
            </Form.Group>      
        </Form>
      </div>
    )
  }
}
export default  withRouter (EditStudent)
