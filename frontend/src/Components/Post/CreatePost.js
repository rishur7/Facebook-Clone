import React, { Component } from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import axios from 'axios';

export default class CreatePost extends Component {
    constructor(props) {
        super(props);
        this.state = {
            author: '',
            desc: '',
            image: ''
        }
    }
    async componentDidMount(){
        const logincheck=await axios.get('/logincheck');
        if(logincheck.data==="Cannot Login"){
            this.setState = (state,callback)=>{ // for react state error
                return;
            };
            console.log("You must login first")
            this.props.history.push('/');
        }
        const username=await axios.get('/currentuser');
        this.setState({author:username.data.username});
    }
    changeHandler = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    submitHandler = async (e) => {
        e.preventDefault();
        await axios.post('/posts', this.state);
        this.props.history.push('/posts');
    }
    render() {
        return (
            <div id="newdiv">
                <div id="btndivcross" style={{ textAlign: "end" }}>
                    <Button href="/posts" id="btncross"><img src="https://image.flaticon.com/icons/png/512/1617/1617543.png" alt="cross" style={{ width: "30px" }} /></Button>
                </div>
                <Card id="createcard" style={{ width: '600px', height: 'auto', margin: "auto", marginTop: "80px" }}>
                    <Card.Body>
                        <h3>Create Post</h3>
                        <form onSubmit={this.submitHandler}>
                            <Form.Control onChange={this.changeHandler} name="desc" as="textarea" rows={6} placeholder={`What's on your mind,  ${this.state.author}`} />
                            <br />
                            <Form.Control onChange={this.changeHandler} name="image" type="text" placeholder="Image Url" />
                            <br />
                            <Form.Control value={this.state.author} type="text" placeholder="Author" readOnly="readonly" style={{textTransform:"capitalize"}} />
                            <br />
                            <Button variant="primary" style={{ width: "100%" }} type="submit">Post</Button>
                        </form>
                    </Card.Body>
                </Card>

            </div>
        )
    }
}
