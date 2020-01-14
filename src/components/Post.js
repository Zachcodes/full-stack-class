import React, { Component } from 'react';
import { connect } from 'react-redux';
import { editPost, deletePost } from '../redux/postsReducer';

class Post extends Component {
  constructor(props) {
    super();
    this.state = {
      editing: false,
      newTitle: props.title,
      newContent: props.content
    };
  }

  flipEdit = () => this.setState({ editing: !this.state.editing });

  handleChange = e => {
    let { name, value } = e.target;
    this.setState({ [name]: value });
  };

  save = () => {
    const { id, editPost } = this.props;
    const { newTitle, newContent } = this.state;
    editPost(newTitle, newContent, id);
  };

  componentDidUpdate(prevProps) {
    const { title, content } = prevProps;
    console.log('prevProps', prevProps);
    console.log('current props', this.props);
    if (title !== this.props.title || content !== this.props.content) {
      this.setState({
        newTitle: this.props.title,
        newContent: this.props.content,
        editing: false
      });
    }
  }

  delete = () => {
    const { id, deletePost } = this.props;
    deletePost(id);
  };

  render() {
    // console.log('props in Post', this.props);
    const { title, content } = this.props;
    const { editing, newTitle, newContent } = this.state;
    return (
      <div className="post-container">
        {editing ? (
          <div>
            <input
              value={newTitle}
              onChange={this.handleChange}
              name="newTitle"
              className="input full-width"
            />
            <textarea
              value={newContent}
              type="text"
              onChange={this.handleChange}
              name="newContent"
              className="input full-width"
            />
            <button onClick={this.save} className="btn normal-btn">
              Save
            </button>
            <button onClick={this.flipEdit} className="btn warning-btn">
              Cancel
            </button>
          </div>
        ) : (
          <div>
            <h4>{title}</h4>
            <p>{content}</p>
            <div>
              <button onClick={this.flipEdit} className="btn normal-btn">
                Edit
              </button>
              <button onClick={this.delete} className="btn warning-btn">
                Delete
              </button>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default connect(null, { editPost, deletePost })(Post);
