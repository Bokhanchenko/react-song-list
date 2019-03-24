import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { Link, hashHistory } from 'react-router';
import query from '../../queries/fetchSongs';
import mutation from '../../mutations/AddSong';


class SongCreate extends Component{
  constructor(props) {
    super(props);

    this.state = { title: '' }
  }

  onSubmit(event) {
    event.preventDefault();

    this.props.mutate({
      variables: { title: this.state.title },
      refetchQueries: [{ query }]
    })
      .then(() => hashHistory.push('/songs'))
  }

  render() {
    return (
      <div>
        <Link to="/songs">Back</Link>
        <h3>Create a New Song</h3>
        <form onSubmit={this.onSubmit.bind(this)}>
          <label>Song Title:</label>
          <input
            type="text"
            autoFocus
            value={this.state.title}
            onChange={event => this.setState({ title: event.target.value })}
          />
        </form>
      </div>
    )
  }
}

export default graphql(mutation)(SongCreate);