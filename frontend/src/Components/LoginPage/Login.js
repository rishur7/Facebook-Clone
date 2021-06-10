import React, { Component } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import './Login.css'
import axios from 'axios';

export default class Login extends Component {
    constructor() {
        super();
        this.state = {
            username: '',
            password: ''
        }
    }
    async componentDidMount() {
        document.body.style.backgroundColor = "#F0F2F5"
        const logincheck=await axios.get('/logincheck');
        if(logincheck.data==="Yes you are logged in"){
            this.props.history.push('/posts');
        }
    }

    changeHandler = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    submitHandler = async (e) => {
        e.preventDefault();
        await axios.post('/log', this.state)
            .then(res => {
                if (res.data === "Success") { this.props.history.push('/posts') }
            })
            .catch(err => {
                if (err) {
                    console.log("Login details are incorrect")
                    document.getElementById("error").innerHTML = "Your login details are incorrect."
                    document.getElementById("error").style = "inline"
                    document.getElementById("error").style.color = "red"
                }
            })
    }

    render() {
        return (
            <div>
                <img id="fblogo" src="https://upload.wikimedia.org/wikipedia/commons/8/89/Facebook_Logo_%282019%29.svg" alt="logo" />
                <br /><br />
                <h3 id="fbdesc">Facebook helps you connect and share <br />with the people in your life.</h3>

                <Card id="card" style={{ width: '396px' }}>
                    <form onSubmit={this.submitHandler}>
                        <Form.Control name="username" onChange={this.changeHandler} type="text" placeholder="Enter name" /><br />
                        <Form.Control name="password" onChange={this.changeHandler} type="password" placeholder="Password" />
                        <p style={{ display: "none" }} id="error"></p>
                        <Card.Body>
                            <Button id="login" variant="primary" style={{ fontSize: "1.3rem" }} type="submit"><b>Log In</b></Button>
                            <br />
                            <a style={{ textDecoration: "none", fontSize: "0.9rem" }} href="https://www.google.com">Forgotten password?</a>
                            <hr /> <br />
                            <a href="/register"><Button id="register" style={{ backgroundColor: "#42B72A", border: "none" }}><b>Creat New Account</b></Button></a>
                        </Card.Body>
                    </form>
                </Card>
                <br />
                <p id="page"><b>Create a Page</b> for a celebrity, band or business.</p>
            </div>
        )
    }
}
