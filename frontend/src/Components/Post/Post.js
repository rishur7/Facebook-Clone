import React, { Component } from 'react'
import './PostStyle.css'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import axios from 'axios';

export default class Post extends Component {
    constructor(){
        super();
       this.state={
           curuser:''
       }
    }

    async componentDidMount() {
        document.body.style.backgroundColor = "#F0F2F5"
        const curruser=await axios.get('/currentuser');
        this.setState({curuser:curruser.data.username});
    }

    deleteHandler=async()=>{
        await axios.delete(`/posts/delete/${this.props.id}`);
        window.location.reload();
    }

    render() {
        let dropdown=''
        if (this.props.author===this.state.curuser){
           dropdown=<DropdownButton title="" variant="light" id="dropdown-basic-button" style={{position:"absolute",right:"0",marginRight:"10px"}}>
           <Dropdown.Item href={`/posts/edit/${this.props.id}`}>Edit</Dropdown.Item>
           <Dropdown.Item onClick={this.deleteHandler}>Delete</Dropdown.Item>
           </DropdownButton>
        }
        else{
            dropdown=''
        }
        return (
            <div>
                <Card id="postCard" style={{ width: '590px', height: '520px' }}>
                    <Card.Body>
                        {dropdown}
                        <Card.Title id="postAuthor" style={{textTransform:"capitalize"}}>{this.props.author}</Card.Title>
                        <Card.Text id="postDesc">
                            {this.props.desc}
                        </Card.Text>
                    </Card.Body>
                    <Card.Img id="postImage" variant="top" src={this.props.image} />
                    <hr />
                    <ButtonGroup>
                        <Button id="likebtn" variant="light"><b>👍 Like</b></Button>
                        <Button href={`/posts/show/${this.props.id}`} id="cmntbtn" variant="light"><b>💬 Comment</b></Button>
                    </ButtonGroup>
                </Card>
            </div>
        )
    }
}
