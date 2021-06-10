import React, { Component } from 'react'
import axios from 'axios';

export default class RightAside extends Component {
    constructor(){
        super();
        this.state={
        users:[]
        }
    }
    async componentDidMount(){
        const getusers=await axios.get('/allusers');
        this.setState({users:getusers.data})
    }
    render() {
        let allusers=this.state.users.map((u,idx)=>{
            return <p style={{textAlign:"justify",textTransform:"capitalize",fontWeight:"600"}} key={idx}><img src="https://upload.wikimedia.org/wikipedia/commons/a/a0/Arh-avatar.jpg" alt="avatar" style={{width:"40px",borderRadius:"200px"}}/> {u.username}</p>
        })
        return (
            <div>
                <aside style={{position:"absolute",top:"100px",right:"20px",width:"250px",backgroundColor:"white",padding:"10px",borderRadius:"5px",boxShadow: "0px 0px 2px #888888"}}>
                     <h6 style={{textAlign:"start",color:"#65676B"}}>People</h6>
                     {allusers}
                </aside>
            </div>
        )
    }
}
