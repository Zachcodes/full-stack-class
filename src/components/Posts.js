import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getPosts, savePost } from '../redux/postsReducer';

class Posts extends Component {
  constructor() {
    super();
    this.state = {
      title: '',
      content: ''
    };
  }

  componentDidMount() {
    this.props.getPosts(this.props.userId);
  }

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  addPost = e => {
    const { title, content } = this.state;
    this.props.savePost(title, content);
    this.setState({ title: '', content: '' });
  };

  render() {
    console.log('this.props for Posts', this.props);
    const { title, content } = this.state;
    return (
      <div>
        <div>
          <input
            type="text"
            value={title}
            name="title"
            onChange={this.handleChange}
          />
          <input
            type="text"
            value={content}
            name="content"
            onChange={this.handleChange}
          />
          <button onClick={this.addPost}>Add Post</button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  // console.log('state is in Posts', state);
  return {
    userId: state.user.user.id,
    ...state.posts
  };
};

export default connect(mapStateToProps, { getPosts, savePost })(Posts);
