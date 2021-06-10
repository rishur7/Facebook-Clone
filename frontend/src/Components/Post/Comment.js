import React, { Component } from 'react'
import axios from 'axios'

export default class Comment extends Component {
    constructor(){
        super();
       this.state={
           curuser:''
       }
    }
    componentDidMount=async()=>{
        const curruser=await axios.get('/currentuser');
        this.setState({curuser:curruser.data.username});
    }
    clickfun=()=>{
    axios.delete(`/posts/comments/delete/${this.props.postid}/${this.props.id}`)
    window.location.reload();
    }
    render() {
        let delbtn=''
        if (this.props.author===this.state.curuser){
            delbtn=<button onClick={this.clickfun} id="delbtn" type="submit" style={{float:"right"}} ><i className="fas fa-trash"></i></button>
        }
        return (
            <div>
            <div id="cmntdes">
                <p style={{textTransform: "capitalize",fontWeight: "bold"}}>{this.props.author}</p>
                <p>{this.props.body}</p>
                {delbtn}
            </div>
            <br/>
            </div>
        )
    }
}
