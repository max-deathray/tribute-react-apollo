import React, { Component } from 'react';
import { Query } from 'react-apollo';
import Vibe from './Vibe';
import gql from 'graphql-tag';

export const FEED_QUERY = gql`
  {
    feed(orderBy: createdAt_DESC) {
      vibes {
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
  }
`;

const NEW_VIBES_SUBSCRIPTION = gql`
  subscription {
    newVibe {
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

const NEW_HEARTS_SUBSCRIPTION = gql`
  subscription {
    newHeart {
      id
      vibe {
        id
        img
        description
        createdAt
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
      user {
        id
      }
    }
  }
`;

class VibeList extends Component {
  _updateCacheAfterHeart = (store, createHeart, vibeId) => {
    const data = store.readQuery({ query: FEED_QUERY });

    const heartedVibe = data.feed.vibes.find(vibe => vibe.id === vibeId);
    heartedVibe.hearts = createHeart.vibe.hearts;

    store.writeQuery({ query: FEED_QUERY, data });
  };

  // calling this will open up a web socket connection to the subscription server
  _subscribeToNewVibes = subscribeToMore => {
    subscribeToMore({
      // pass 2 args to 'subscribeToMore'

      document: NEW_VIBES_SUBSCRIPTION,
      // udpateQuery - this is acting like a redux reducer!

      updateQuery: (prev, { subscriptionData }) => {
        console.log('subscribe data', subscriptionData);
        if (!subscriptionData.data) return prev;
        const newVibe = subscriptionData.data.newVibe;

        return Object.assign({}, prev, {
          feed: {
            vibes: [newVibe, ...prev.feed.vibes],
            count: prev.feed.vibes.length + 1,
            __typename: prev.feed.__typename,
          },
        });
      },
    });
  };

  _subscribeToNewHearts = subscribeToMore => {
    subscribeToMore({
      document: NEW_HEARTS_SUBSCRIPTION,
    });
  };

  render() {
    return (
      <Query query={FEED_QUERY}>
        {({ loading, error, data, subscribeToMore }) => {
          if (loading) return <div>Fetching</div>;
          if (error) return <div>Error</div>;

          this._subscribeToNewVibes(subscribeToMore);
          this._subscribeToNewHearts(subscribeToMore);

          const vibesToRender = data.feed.vibes;

          return (
            <div className="vibe-list">
              {vibesToRender.map((vibe, index) => (
                <Vibe
                  key={vibe.id}
                  vibe={vibe}
                  index={index}
                  updateStoreAfterHeart={this._updateCacheAfterHeart}
                />
              ))}
            </div>
          );
        }}
      </Query>
    );
  }
}

export default VibeList;
