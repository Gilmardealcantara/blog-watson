import React, { Component } from 'react';
import './App.css';
import 'carbon-components/css/carbon-components.min.css'

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
    this.state = { addPost: false };
    this.changeAction = this.changeAction.bind(this);
  }

  changeAction(state) {
    this.setState({ addPost: state });
  }

  render() {
    return (
      <div className="grid">
        <HeaderBlog />
        <div className="body-blog">
          <SideBarBlog changeAction={this.changeAction} active={this.state.addPost} />
          {
            !this.state.addPost ? <HomeBlog/> : <PostForm changeAction={this.changeAction}/>
          }

        </div>
        <FooterBlog />
      </div>
    );
  }
}

export default App;
