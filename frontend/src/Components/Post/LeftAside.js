import React, { Component } from 'react'

export default class LeftAside extends Component {
    render() {
        return (
            <div>
                    <aside style={{position:"absolute",top:"100px",left:"20px",width:"300px",backgroundColor:"white",padding:"10px",borderRadius:"5px",boxShadow: "0px 0px 2px #888888"}}>
                    <a style={{textDecoration:"none",color:"black"}} target="_blank" rel="noopener noreferrer" href="https://www.worldometers.info/coronavirus/"><p style={{textAlign:"start"}}><img  style={{width:"40px"}} src="https://static.xx.fbcdn.net/rsrc.php/v3/yR/r/tInzwsw2pVX.png" alt="covidimg" /><span style={{marginLeft:"10px"}}><b>Covid-19 Information Center</b></span></p></a>
                    <a style={{textDecoration:"none",color:"black"}} rel="noopener noreferrer" href="/saved"><p style={{textAlign:"start"}}><img  style={{width:"40px"}} src="https://static.xx.fbcdn.net/rsrc.php/v3/yr/r/2uPlV4oORjU.png" alt="savedimg" /><span style={{marginLeft:"10px"}}><b>Saved</b></span></p></a>
                    <a style={{textDecoration:"none",color:"black"}} target="_blank" rel="noopener noreferrer" href="https://www.accuweather.com/"><p style={{textAlign:"start"}}><img  style={{width:"40px"}} src="https://static.xx.fbcdn.net/rsrc.php/v3/yq/r/kULMG0uFcEQ.png" alt="weatherimg" /><span style={{marginLeft:"10px"}}><b>Weather</b></span></p></a>
                    <a style={{textDecoration:"none",color:"black"}} target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/rishabh-srivastava-r7/"><p style={{textAlign:"start",marginLeft:"7px"}}><img  style={{width:"28px"}} src="https://image.flaticon.com/icons/png/512/174/174857.png" alt="linkedinimg" /><span style={{marginLeft:"10px"}}><b>  Contact Me</b></span></p></a>
                </aside>
            </div>
        )
    }
}
