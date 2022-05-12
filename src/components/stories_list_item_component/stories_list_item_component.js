import React, { useCallback, useMemo } from 'react';
import cx from 'classnames';
import styles from './stories_list_item_component.module.scss';

const StoriesListItemComponent = props => {
  const { story, selectStory, selectedStory } = props;

  const storyClassList = useMemo(
    () =>
      cx(
        styles.story,
        { [styles.published]: story.status === 'published' },
        { [styles.selected]: selectedStory == story.id }
      ),
    [story, selectedStory]
  );

  const embedCode = useCallback(() => {
    // eslint-disable-next-line no-undef
    console.log(`embed code`);
  }, [story]);
  const editStory = useCallback(() => {
    // eslint-disable-next-line no-undef
    console.log(`edit story ${story.id}`);
  }, [story]);
  const deleteStory = useCallback(() => {
    // eslint-disable-next-line no-undef
    console.log(`delete story ${story.id}`);
  }, [story]);

  const unpublish = useCallback(() => {
    // eslint-disable-next-line no-undef
    console.log(`unpublish story ${story.id}`);
  }, [story]);

  return (
    <article className={storyClassList} onClick={() => selectStory(story.id)}>
      <div className={styles.wrapper}>
        <header className={styles.header}>
          <p className={styles.status}>{story.items.length} cards, Demo</p>
          <div className={styles.controlPanel}>
            <button className={styles.button} onClick={embedCode}>
              1
            </button>
            <button className={styles.button} onClick={editStory}>
              2
            </button>
            <button className={styles.button} onClick={deleteStory}>
              3
            </button>
          </div>
        </header>
        <div className={styles.tagsPanel}>
          <span className={styles.tag}>Some tag#1</span>
          <span className={styles.tag}>Some tag#2</span>
        </div>
        <div className={styles.main}>
          <h2 className={styles.title}>{story.title}</h2>
          <p className={styles.body}>{story.subtitle}</p>
        </div>
        <footer className={styles.footer}>
          <button className={styles.publish} onClick={unpublish}>
            Unpublish mix
          </button>
        </footer>
      </div>
    </article>
  );
};

export default StoriesListItemComponent;
