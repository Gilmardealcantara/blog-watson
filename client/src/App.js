import React, { Component } from 'react';
import './App.css';
import 'carbon-components/css/carbon-components.min.css'

import HeaderBlog from './components/HeaderBlog';
import FooterBlog from './components/FooterBlog';
import HomeBlog from './components/HomeBlog';

class App extends Component {
  constructor(props) {
    super(props);
    fetch('/posts').then(response => {
      return response.text();
    }).then(data => {
      console.log(data);
    })

    fetch('/comments/1').then(response => {
      return response.text();
    }).then(data => {
      console.log(data);
    })
  }

  render() {
    return (
      <div className="App">
        <HeaderBlog />
        <HomeBlog/>
        <FooterBlog/>
      </div>
    );
  }
}

export default App;
