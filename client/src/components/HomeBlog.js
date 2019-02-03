import React, { Component } from 'react';
import { Card } from 'react-materialize'


class HomeBlog extends Component {

    render() {

        if (!this.props.posts) {
            return (
                <div>
                    <p>Waiting..</p>
                </div>
            );
        }


        if (this.props.posts.length <= 0) {
            return (
                <div>
                    <p>Erro</p>
                </div>
            )
        }

        return (
            <div className="content-blog">

                    {
                        this.props.posts.map((post, index) =>
                            <Card
                                key={index}
                                title={post.TITLE}
                                reveal={<p>Here is some more information about this product that is only revealed once clicked on.</p>}>
                                <p>{post.CONTENT}</p>
                                <p></p>
                                <p><a href="#">{post.AUTHOR}</a></p>
                            </Card>
                        )
                    }
            </div>
        )
    }
}

export default HomeBlog;