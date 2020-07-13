import React, { Component } from 'react';
// import PostData from '../data/posts.json';

class PostDetail extends Component {
  titleWasClicked(event) {
    event.preventDefault();
    alert('Clicked!!');
  }

  render() {
    const { post } = this.props;
    return (
      <div>
        <h1 onClick={this.titleWasClicked}>{post.title} </h1>
        <h3>{post.content}</h3>
      </div>
    );
  }
}

export default PostDetail;
