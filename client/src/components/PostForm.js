import React from 'react';
import { Row, Input } from 'react-materialize'
import Button from 'react-materialize/lib/Button';

const PostForm = props => {
    return (
        <div className="form-blog">
            <Row>
                <Input placeholder="Título" label="Título" />
                <Input placeholder="Autor" label="Autor" />
                <Input placeholder="Conteudo" label="Conteudo" />
            </Row>
            <Row>
                <Button>Send Data</Button>
            </Row>
        </div>
    )
}

export default PostForm;