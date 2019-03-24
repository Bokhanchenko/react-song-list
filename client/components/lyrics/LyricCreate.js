import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import mutation from '../../mutations/AddLyricToSong'

class LyricCreate extends Component {
  constructor(props) {
    super(props);
    this.state = { content: '' }
  }

  onSubmit(event) {
    event.preventDefault();

    this.props.mutate({
      variables: {
        content: this.state.content,
        songId: this.props.songId
      }
    })
      .then(() => this.setState({ content: '' }))
  }

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit.bind(this)}>
          <label>Add a Lyric</label>
          <input
            autoFocus
            value={this.state.content}
            onChange={event => this.setState({ content: event.target.value })}
          />
        </form>
      </div>
    )
  }
}

export default graphql(mutation)(LyricCreate);