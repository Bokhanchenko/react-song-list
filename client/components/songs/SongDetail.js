import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { Link } from 'react-router';
import fetchSong from '../../queries/fetchSong';
import LyricCreate from '../lyrics/LyricCreate';
import LyricList from '../lyrics/LyricList';

class SongDetail extends Component {
  render() {
    const { song } = this.props.data;

    if (!song) return (<div>Loading...</div>);

    return (
      <div>
        <Link to="/songs">Back</Link>
        <h3>{ song.title }</h3>
        <LyricList lyrics={ song.lyrics }/>
        <LyricCreate songId={ this.props.params.id }/>
      </div>
    )
  }
}

export default graphql(fetchSong, {
  options: props => ({ variables: { id: props.params.id }})
})(SongDetail)