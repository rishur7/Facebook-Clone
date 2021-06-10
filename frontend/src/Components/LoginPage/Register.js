import React, { Component } from 'react'
import './Register.css'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import axios from 'axios';

export default class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            password: ''
        }
    }
    componentDidMount() {
        document.body.style.backgroundColor = "#F0F2F5"
    }

    changeHandler = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    submitHandler = async (e) => {
        e.preventDefault();
        await axios.post('/reg', this.state);
        this.props.history.push('/');
    }

    render() {
        return (
            <div>
                <Card id="createcard" style={{ width: '600px', height: 'auto', margin: "auto", marginTop: "80px" , boxShadow:"0px 0px 10px #888888" }}>
                    <Card.Body>
                       <p style={{textAlign:"start"}}> <b>Sign Up</b>
                        It's quick and easy.</p>
                        <form onSubmit={this.submitHandler}>
                        <p className="label">Username</p>
                        <Form.Control onChange={this.changeHandler}  name="username" className="inpreg" type="text" placeholder="Enter your name" />
                        <br/>
                        <p className="label">Email</p>
                        <Form.Control onChange={this.changeHandler} name="email"  className="inpreg" type="email" placeholder="Enter email" />
                        <br/>
                        <p className="label">Password</p>
                        <Form.Control onChange={this.changeHandler} name="password"  className="inpreg" type="password" placeholder="Password" />
                        <br/>
                        <Button id="register" style={{backgroundColor:"#42B72A",border:"none"}} type="submit"><b>Sign Up</b></Button>
                        </form>
                    </Card.Body>
                </Card>
            </div>
        )
    }
}
