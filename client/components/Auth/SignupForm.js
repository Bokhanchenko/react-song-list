import React, { Component } from 'react';
import AuthFrom from './AuthForm'
import { graphql } from "react-apollo";
import mutation from '../../mutations/Signup';
import query from '../../queries/CurrentUser';
import { hashHistory } from "react-router";

class SignupFrom extends Component {
  constructor(props) {
    super(props);

    this.state = { errors: [] }
  }

  componentWillUpdate(nextProps) {
    if (nextProps.data.user && !this.props.data.user) {
      hashHistory.push('/songs')
    }
  }

  onSubmit({ email, password }) {
    this.props.mutate({
      variables: { email, password },
      refetchQueries: [{ query }]
    })
      .catch(res => {
        const errors = res.graphQLErrors.map(err => err.message);
        this.setState({ errors })
      })
  }

  render() {
    return (
      <div>
        <h3>Sing Up</h3>
        <AuthFrom errors={this.state.errors} onSubmit={this.onSubmit.bind(this)} />
      </div>
    )
  }
}

export default graphql(query)(
  graphql(mutation)(SignupFrom)
)