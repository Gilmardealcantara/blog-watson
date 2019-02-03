import React, { Component } from 'react';
import { Card, CardTitle } from 'react-materialize'


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
                <Card
                    title={this.props.posts[1].TITLE}
                    reveal={<p>Here is some more information about this product that is only revealed once clicked on.</p>}>
                    <p>{this.props.posts[1].CONTENT}</p>
                    <p></p>
                    <p><a href="#">{this.props.posts[1].AUTHOR}</a></p>
                </Card>
            </div>
        )
    }
}

export default HomeBlog;