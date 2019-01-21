import React, { Component } from 'react';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import NProgress from 'nprogress';

const POST_MUTATION = gql`
  mutation PostMutation($description: String!, $img: String!) {
    post(description: $description, img: $img) {
      id
      img
      description
    }
  }
`;

class CreateVibe extends Component {
  state = {
    img: '',
    description: '',
  };

  render() {
    const { img, description } = this.state;
    return (
      <div>
        <div>
          <input
            value={description}
            onChange={e => this.setState({ description: e.target.value })}
            type="text"
            placeholder="Describe the vibe!"
          />
          <input
            value={img}
            onChange={e => this.setState({ img: e.target.value })}
            type="text"
            placeholder="Image"
          />
        </div>
        <Mutation
          mutation={POST_MUTATION}
          variables={{ description, img }}
          onCompleted={() => this.props.history.push('/')}
        >
          {postMutation => <button onClick={postMutation}>Submit</button>}
        </Mutation>
      </div>
    );
  }
}

export default CreateVibe;
