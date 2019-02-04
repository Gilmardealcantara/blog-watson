import React, { Component } from 'react';
import { Card, Preloader, Chip, Badge, Icon } from 'react-materialize'


class HomeBlog extends Component {
    constructor(props) {
        super(props);
        this.state = { posts: null }
    }

    deletePost(id) {
        fetch('post/' + id, {
            method: 'DELETE'
        }).then(resp => resp.ok ? resp.json() : {})
            .then(data => {
                console.log(data);
                window.Materialize.toast(data.msg + ' / PostId: ' + data.post, 2000);
                this.setState({ posts: this.state.posts.filter(e => e.ID != data.post) })
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
                    <Preloader size='big' color="green" />
                </div>
            );
        }

        return (
            <div className="content-blog">
                {
                    this.state.posts.map(post => {
                        post.NLUJson = JSON.parse(post.NLU);
                        return (
                            <Card
                                key={post.ID}
                                title={post.TITLE}
                                reveal={<p>Here is some more information about this product that is only revealed once clicked on.</p>}
                                actions={[<a key={post.ID} onClick={this.deletePost.bind(this, post.ID)}>Delete</a>]}>
                                <p>{post.CONTENT}</p>
                                {
                                    post.NLUJson.entities.map((ent, index) => {
                                        if(ent.sentiment.label === 'positive')
                                            return <Chip key={index}><Icon tiny>mood</Icon> {`Entity: ${ent.type}/${ent.text}/${ent.relevance}`}</Chip>                                    
                                        else if(ent.sentiment.label === 'negative')
                                            return <Chip key={index}><Icon tiny>mood_bad</Icon> {`Entity: ${ent.type}/${ent.text}/${ent.relevance}`}</Chip>
                                        else 
                                            return <Chip key={index}><Icon tiny>face</Icon> {`Entity: ${ent.type}/${ent.text}/${ent.relevance}`}</Chip>
                                    })
                                }

                                {
                                    post.NLUJson.keywords.map((ent, index) => {
                                        if(ent.sentiment.label === 'positive')
                                            return <Chip key={index}><Icon tiny>mood</Icon> {`keyword: ${ent.text}/${ent.relevance}`}</Chip>                                    
                                        else if(ent.sentiment.label === 'negative')
                                            return <Chip key={index}><Icon tiny>mood_bad</Icon> {`keyword: ${ent.text}/${ent.relevance}`}</Chip>
                                        else 
                                            return <Chip key={index}><Icon tiny>face</Icon> {`keyword: ${ent.text}/${ent.relevance}`}</Chip>
                                    })
                                }

                                {/* <p>{post.NLU}</p> */}
                                <p><a key={post.ID} href="#">{post.AUTHOR}</a></p>
                            </Card>)
                            ;
                    })
                }
            </div>
        )
    }
}

export default HomeBlog;