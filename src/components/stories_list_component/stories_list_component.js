import React, { useMemo } from 'react';
import StoriesListItemComponent from '../stories_list_item_component/stories_list_item_component';
import StoriesListPanelComponent from '../stories_list_panel/stories_list_panel';
import styles from './stories_list_component.module.scss';

const StoriesListComponent = props => {
  const { stories: data, loading, channel, selectedStory, changeView, selectStory } = props;

  const stories = useMemo(() => {
    if (data) {
      return data;
    }
  }, [data]);

  return (
    <>
      <header className={styles.header}>
        <StoriesListPanelComponent changeView={changeView} channel={channel} />
      </header>
      <div className={styles.stories}>
        {loading && <p>Loading...</p>}
        {stories &&
          stories.map(e => (
            <StoriesListItemComponent key={e.id} story={e} selectStory={selectStory} selectedStory={selectedStory} />
          ))}
      </div>
    </>
  );
};

export default StoriesListComponent;
