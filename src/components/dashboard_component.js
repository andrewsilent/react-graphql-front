import React from 'react';
import { useQuery } from '@apollo/client';
import { userById, userWithChannels } from '../queries/user';
import {
  userChannels,
  userChannelWithStories,
  userChannelStoriesItems,
  userChannelStoriesWithItems,
  userChannelStoryWithItems,
} from '../queries/channel';

const Dashboard = props => {
  // const { loading, error, data } = useQuery(userById, { variables: { userId: 2349 } });
  const { loading, error, data } = useQuery(userChannelStoriesWithItems, {
    variables: { userId: 2349, channelId: 617, storyId: 8015 },
  });

  return (
    <>
      <pre>
        {loading && <p>Loading...</p>}
        {error && JSON.stringify(error, null, 2)}
        {data && JSON.stringify(data, null, 2)}
      </pre>
    </>
  );
};

export default Dashboard;
