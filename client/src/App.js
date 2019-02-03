import React, { Component } from 'react';
import './App.css';
import 'carbon-components/css/carbon-components.min.css'
import { Row, Col } from 'react-materialize'

import 'materialize-css';
import 'materialize-css/dist/css/materialize.min.css';

import HeaderBlog from './components/HeaderBlog';
import FooterBlog from './components/FooterBlog';
import HomeBlog from './components/HomeBlog';
import PostForm from './components/PostForm';
import SideBarBlog from './components/SideBarBlog';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { posts: null }
  }

  componentWillMount(){
    fetch('/posts').then(response => {
      return response.ok ? response.json() : [];
    }).then(posts => {
      this.setState({ posts })
      console.log(posts);
    })

    fetch('/comments/1').then(response => {
      return response.text();
    }).then(data => {
      console.log(data);
    })
  }

  render() {
    return (
      <div className="grid">
        <HeaderBlog />
        <div className="body-blog">
          <SideBarBlog />
          <HomeBlog posts={this.state.posts} />
          {/* <PostForm/> */}
        </div>
        <FooterBlog />
      </div>
    );
  }
}

export default App;
