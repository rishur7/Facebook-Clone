import React, { Component } from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import axios from 'axios';

export default class EditPost extends Component {
    constructor(props) {
        super(props);
        this.state = {
            author: '',
            desc: '',
            image: ''
        }
    }
    async componentDidMount() {
        const post = await axios.get(`/posts/edit/${this.props.match.params.id}`);
        this.setState({
            author: post.data.author,
            desc: post.data.desc,
            image: post.data.image
        })
    }
    changeHandler = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    submitHandler = async (e) => {
        e.preventDefault();
        await axios.patch(`/posts/edit/${this.props.match.params.id}`, this.state);
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
                        <h3>Edit Post</h3>
                        <form onSubmit={this.submitHandler}>
                            <Form.Control onChange={this.changeHandler} value={this.state.desc} name="desc" as="textarea" rows={6} placeholder="What's on your mind, Rishabh?" />
                            <br />
                            <Form.Control onChange={this.changeHandler} value={this.state.image} name="image" type="text" placeholder="Image Url" />
                            <br />
                            <Form.Control onChange={this.changeHandler} value={this.state.author} name="author" type="text" placeholder="Author" readOnly="readonly" style={{textTransform:"capitalize"}}/>
                            <br />
                            <Button variant="primary" style={{ width: "100%" }} type="submit">Update</Button>
                        </form>
                    </Card.Body>
                </Card>
            </div>
        )
    }
}
