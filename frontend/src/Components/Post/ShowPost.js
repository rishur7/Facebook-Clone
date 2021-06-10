import React, { Component } from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import Comment from './Comment';

export default class ShowPost extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id:'',
            author: '',
            desc: '',
            image: '',
            commentauthor:'',
            comment:[],
            showcmnt:[]
        }
    }
    async componentDidMount() {
        const post = await axios.get(`/posts/edit/${this.props.match.params.id}`);
        const cmntuser=await axios.get('/currentuser');

        this.setState({
            id:post.data._id,
            author: post.data.author,
            desc: post.data.desc,
            image: post.data.image,
            commentauthor:cmntuser.data.username,
            showcmnt:post.data.comments
        })
        // console.log(post.data.comments);
        document.body.style.backgroundColor = "#F0F2F5";
    }

    changeComment=(e)=>{
        this.setState({ comment: e.target.value })
    }
    

    submitHandler = async (e) => {
        e.preventDefault();
        axios.post(`/posts/comments/${this.props.match.params.id}`,this.state);
        this.props.history.push(`/posts/show/${this.props.match.params.id}`);
        window.location.reload();
    }

    render() {
        let allcmnts = this.state.showcmnt.slice(0).reverse().map((p,index) => {
            return <Comment
            key={p._id}
            idx={index}
            body={p.body}
            author={p.username} 
            id={p._id}
            postid={this.state.id}
            />
        })
        return (
            <div>
                <div id="btndivcross" style={{textAlign:"end"}}>
                <Button href="/posts" id="btncross"><img src="https://image.flaticon.com/icons/png/512/1617/1617543.png" alt="cross" style={{ width: "30px" }}/></Button>
                </div>
                <Card id="postCard" style={{ width: '690px', height: '520px' }}>
                    <Card.Body>
                        <Card.Title id="postAuthor" style={{textTransform:"capitalize"}}>{this.state.author}</Card.Title>
                        <Card.Text id="postDesc">
                            {this.state.desc}
                        </Card.Text>
                    </Card.Body>
                    <Card.Img id="postImage" variant="top" src={this.state.image} />
                </Card>
                <form onSubmit={this.submitHandler} id="divcmnt" style={{marginLeft:"415px",textAlign:"start"}}>
                <h6>Comment</h6>
                <textarea onChange={this.changeComment} name="comment" id="body" rows="4" cols="60" placeholder="Add a new comment..."></textarea>
                <br/>
                <Button style={{marginLeft:"2px"}} variant="primary" type="submit">Submit</Button>
                </form>
                <br/>
                {allcmnts}
            </div>
        )
    }
}
