import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { useQuery } from '@apollo/client';
import styles from './dashboard.module.scss';

import StoryComponent from '../../components/story_component/story_component';
import SidebarComponent from '../../components/sidebar_component/sidebar_component';
import StoriesListComponent from '../../components/stories_list_component/stories_list_component';
import { userChannelStoriesWithItems } from '../../queries/channel';
import { useHistory, useLocation, useParams } from 'react-router';

const Dashboard = props => {
  const [state, setState] = useState({
    user: {},
    channel: {},
    stories: [],
    view: 1,
    selectedStory: undefined,
    loading: true,
    loaded: false,
  });

  const currentUrl = useLocation().pathname;
  const history = useHistory();
  const { storyId } = useParams();

  const { loading, error, data } = useQuery(userChannelStoriesWithItems, {
    variables: { userId: 2349, channelId: 617 },
  });

  useEffect(() => {
    if (storyId) {
      setState(state => ({ ...state, selectedStory: storyId }));
    }
  }, [storyId, state.selectedStory]);

  useEffect(() => {
    loading
      ? setState(state => ({ ...state, loading: true, loaded: false }))
      : setState(state => ({ ...state, loading: false, loaded: true }));
  }, [loading]);

  useEffect(() => {
    if (data) {
      setState(state => ({
        ...state,
        ...data.userChannelStoriesWithItems[0],
      }));
    }
  }, [data]);

  const selectStory = useCallback(
    storyId => {
      history.push(`/stories/${storyId}`);
    },
    [currentUrl, state.selectedStory]
  );

  const changeView = useCallback(viewId => {
    setState(state => ({ ...state, view: viewId }));
  }, []);

  const story = useMemo(
    () => state.stories.filter(e => e.id === state.selectedStory)[0],
    [state.stories, state.selectedStory, storyId]
  );

  const items = useMemo(() => {
    if (currentUrl === '/news-feed') {
      return state.stories.map(e => e.items).flat(Infinity);
    } else if (state.stories.length && state.selectedStory) {
      return state.stories.filter(e => (e.id == state.selectedStory ? e : null))[0].items;
    }
  }, [state.selectedStory, storyId, state.stories, currentUrl]);

  return (
    <>
      <div className={styles.page}>
        <aside className={styles.sidebar}>
          <SidebarComponent user={state.user} />
        </aside>
        <section className={styles.stories}>
          <StoriesListComponent
            stories={state.stories}
            channel={state.channel}
            loading={state.loading}
            selectedStory={state.selectedStory}
            selectStory={selectStory}
            changeView={changeView}
          />
        </section>
        <main className={styles.story}>
          <StoryComponent story={story} selectedStory={state.selectedStory} items={items} changeView={changeView} />
        </main>
      </div>
    </>
  );
};

export default Dashboard;
