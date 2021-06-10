import React, { Component } from 'react'
import Post from './Post';
import axios from 'axios';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import FormControl from 'react-bootstrap/FormControl';
import Card from 'react-bootstrap/Card';
import LeftAside from './LeftAside';
import RightAside from './RightAside';

export default class SavedPost extends Component {
    constructor() {
        super();
        this.state = {
            posts: [],
            username:''
        }
        
    }
    async componentDidMount() {
        const posts = await axios.get('/allposts');
        if(posts.data==="Cannot Login"){
            this.setState = (state,callback)=>{ // for react state error
                return;
            };
            console.log("You must login first")
            this.props.history.push('/');
        }
        this.setState({ posts: posts.data });
        const username=await axios.get('/currentuser');
        this.setState({username:username.data.username});
    }
    logout=()=>{
        axios.get('/logout');
        this.props.history.push('/');
    }
    render() {
        let allPosts = this.state.posts.slice(0).reverse().map(p => {
            if(this.state.username===p.author){
            return <Post
                key={p._id}
                author={p.author}
                desc={p.desc}
                image={p.image}
                id={p._id}
            />
        }
        else{
            return '';
        }
        })
        return (
            <div>
                <Navbar style={{ backgroundColor: "white", position: "sticky", top: "0", zIndex: "2" }}>
                    <Navbar.Brand href="/"><img src="https://facebookbrand.com/wp-content/uploads/2019/04/f_logo_RGB-Hex-Blue_512.png?w=512&h=512" alt="fblogo" style={{ width: "40px", marginLeft: "20px" }} /></Navbar.Brand>

                    <FormControl id="searchbox" type="text" placeholder="Search Facebook" className="mr-sm-2" />

                    <ButtonGroup size="sm" id="navlogos">
                    <a href="/posts"><Button id="btn1"><img src="https://image.flaticon.com/icons/png/512/1946/1946488.png" alt="home" style={{ width: "30px" }} /></Button></a>
                     <a href="/allusers"><Button id="btn2"><img src="https://image.flaticon.com/icons/png/512/681/681443.png" alt="group chat" style={{ width: "30px" }} /></Button></a>
                     <a href="/saved"><Button id="btn3"><img src="https://image.flaticon.com/icons/png/512/84/84510.png" alt="saved" style={{ width: "30px" }} /></Button></a>
                    </ButtonGroup>
                    <Button onClick={this.logout} style={{marginLeft:"450px"}} variant="primary">Logout</Button>
                </Navbar>

                <Card id="postCard" style={{ width: '590px' }}>
                    <Card.Body>
                        <Card.Text style={{ textAlign: "center", fontFamily: "Open Sans, sans-serif", margin: "auto" ,fontSize:"30px",color:"gray" }}>
                         What's on your mind, <span style={{textTransform:"capitalize"}}>{this.state.username}</span>?
                        </Card.Text>
                    </Card.Body>
                    <hr />
                    <ButtonGroup>
                        <Button id="likebtn" variant="light" href="/new"><b>Create a Post</b></Button>
                    </ButtonGroup>
                </Card>
                {allPosts}
                <LeftAside />
                <RightAside />
            </div>
        )
    }
}
//like,userlist,momentjs