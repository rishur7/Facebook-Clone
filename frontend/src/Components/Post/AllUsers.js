import React, { Component } from 'react'
import Card from 'react-bootstrap/Card';
import axios from 'axios';
import CardDeck  from 'react-bootstrap/CardDeck';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import FormControl from 'react-bootstrap/FormControl';

export default class AllUsers extends Component {
    constructor(){
        super();
        this.state={
        users:[]
        }
    }
    logout=()=>{
        axios.get('/logout');
        this.props.history.push('/');
    }
    async componentDidMount(){
        const getusers=await axios.get('/allusers');
        if(getusers.data==="Cannot Login"){
            this.setState = (state,callback)=>{ // for react state error
                return;
            };
            console.log("You must login first")
            this.props.history.push('/');
        }
        this.setState({users:getusers.data})
    }
    render() {
        let allusers=this.state.users.map((u,idx)=>{
            return<CardDeck key={idx} style={{display: 'flex', flexDirection: 'row',justifyContent:"center"}}>
              <Card style={{ width: '12rem',margin:"auto",marginTop:"20px",marginLeft:"15px"}}>
            <Card.Img variant="top" src="https://upload.wikimedia.org/wikipedia/commons/a/a0/Arh-avatar.jpg" id="postImage"/>
            <Card.Body>
                <Card.Title style={{textTransform:"capitalize"}}>{u.username}</Card.Title>
                <Card.Text>
                {u.email}
                </Card.Text>
            </Card.Body>
        </Card>
        </CardDeck>;
        })
        return (
            <div >
                <Navbar style={{ backgroundColor: "white", position: "sticky", top: "0", zIndex: "4" }}>
                    <Navbar.Brand href="/"><img src="https://facebookbrand.com/wp-content/uploads/2019/04/f_logo_RGB-Hex-Blue_512.png?w=512&h=512" alt="fblogo" style={{ width: "40px", marginLeft: "20px" }} /></Navbar.Brand>

                    <FormControl id="searchbox" type="text" placeholder="Search Facebook" className="mr-sm-2" />

                    <ButtonGroup size="sm" id="navlogos">
                    <a href="/posts"><Button id="btn1"><img src="https://image.flaticon.com/icons/png/512/1946/1946488.png" alt="home" style={{ width: "30px" }} /></Button></a>
                     <a href="/allusers"><Button id="btn2"><img src="https://image.flaticon.com/icons/png/512/681/681443.png" alt="group chat" style={{ width: "30px" }} /></Button></a>
                     <a href="/saved"><Button id="btn3"><img src="https://image.flaticon.com/icons/png/512/84/84510.png" alt="saved" style={{ width: "30px" }} /></Button></a>
                    </ButtonGroup>
                    <Button onClick={this.logout} style={{marginLeft:"450px"}} variant="primary">Logout</Button>
                </Navbar>
                <div id="userdiv">
                {allusers}
                </div>
            </div>
        )
    }
}
