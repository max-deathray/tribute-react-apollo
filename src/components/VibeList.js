import React, { Component } from 'react';
import { Query } from 'react-apollo';
import Vibe from './Vibe';
import gql from 'graphql-tag';

const FEED_QUERY = gql`
  {
    feed {
      id
      img
      description
      postedBy {
        id
        name
      }
      hearts {
        id
        user {
          id
        }
      }
    }
  }
`;

class VibeList extends Component {
  render() {
    return (
      <Query query={FEED_QUERY}>
        {({ loading, error, data }) => {
          if (loading) return <div>Fetching</div>;
          if (error) return <div>Error</div>;

          const vibesToRender = data.feed;

          return (
            <div className="vibe-list">
              {vibesToRender.map((vibe, index) => (
                <Vibe key={vibe.id} vibe={vibe} index={index} />
              ))}
            </div>
          );
        }}
      </Query>
    );
  }
}

export default VibeList;
