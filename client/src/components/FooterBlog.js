import React from 'react';
import {Footer} from 'react-materialize';

const FooterBlog = props => {
    return (
        <div className="footer-blog" botton>
            <Footer style={{backgroundColor: '#424242'}} copyrights="&copy 2015 Copyright Text"
                moreLinks={
                    <a className="grey-text text-lighten-4 right" href="#!">More Links</a>
                }
                className='example'
            >
            </Footer>
        </div>
    )
}

export default FooterBlog;