import React, { Component } from 'react';
import { Row, Col, Card, Preloader } from 'react-materialize'


class HomeBlog extends Component {
    constructor(props){
        super(props);
        this.state = {posts: null}
    }
    
    deletePost(id){
        fetch('post/' + id, {
            method: 'DELETE'
        }).then( resp => resp.ok ? resp.json(): {})
        .then(data => {
            console.log(data);
            window.Materialize.toast(data.msg + ' / PostId: ' + data.post, 2000);
            this.setState({posts: this.state.posts.filter(e => e.ID != data.post)})
        });
    }

    componentWillMount() {
        fetch('/posts').then(response => {
          return response.ok ? response.json() : [];
        }).then(posts => {
          this.setState({ posts })
          console.log(posts);
        }).catch(err => {
            debugger
        })
    
        // fetch('/comments/1').then(response => {
        //   return response.text();
        // }).then(data => {
        //   console.log(data);
        // })
      }

    render() {
        if (!this.state.posts) {
            return (
            <div className="load-blog">
                  <Preloader size='big' color="#25a59a" />
              </div>
            );
          }

        return (
            <div className="content-blog">
                    {
                        this.state.posts.map( post =>
                            <Card
                                Key={post.ID}
                                title={post.TITLE}
                                reveal={<p>Here is some more information about this product that is only revealed once clicked on.</p>}
                                actions={[<a onClick={this.deletePost.bind(this, post.ID)}>Delete</a>]}>
                                <p>{post.CONTENT}</p>
                                <p><a key={post.ID} href="#">{post.AUTHOR}</a></p>
                            </Card>
                        )
                    }
            </div>
        )
    }
}

export default HomeBlog;