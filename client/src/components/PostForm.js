import React, { Component } from 'react';
import { Row, Input } from 'react-materialize'
import Button from 'react-materialize/lib/Button';

class PostForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "",
            author: "",
            content: ""
        }
    }

    analyzePost(text){
        fetch('nlu', {
            method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({text: text})
        }).then( resp => resp.ok ? resp.json(): {})
        .then(data => {
            console.log(data.data)
        });
    }

    submitForm(){
        fetch('post', {
            method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.state)
        }).then( resp => resp.ok ? resp.text(): {})
        .then(data => {
            console.log(data);
            this.setState({
                title: "",
                author: "",
                content: ""
            })
            window.Materialize.toast(data, 3000);
            this.props.changeAction(false);
        });
    }

    render() {
        return (
            <div className="form-blog">
                <Row>
                    <Input placeholder="Título"
                        label="Título"
                        value={this.state.title}
                        onChange={(event) => this.setState({ title: event.target.value })}
                    />
                    <Input placeholder="Autor"
                        label="Autor"
                        value={this.state.author}
                        onChange={(event) => this.setState({ author: event.target.value })}
                    />
                    <Input placeholder="Conteudo"
                        label="Conteudo"
                        value={this.state.content}
                        onChange={(event) => this.setState({ content: event.target.value })}
                    />
                </Row>
                <Row>
                    <Button onClick={this.submitForm.bind(this)}>Send Data</Button>
                </Row>
            </div>
        )
    }
}

export default PostForm;