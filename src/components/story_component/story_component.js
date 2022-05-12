import React, { useCallback } from 'react';
import styles from './story_component.module.scss';
import ItemsListComponent from '../items_list/items_list';
import StoryHeaderComponent from '../story_header/story_header';

const StoryComponent = props => {
  const { story, selectedStory, items, changeView } = props;

  const addCard = useCallback(() => {
    // eslint-disable-next-line no-undef
    console.log('add a new card');
  }, [story]);

  const addMedia = useCallback(() => {
    // eslint-disable-next-line no-undef
    console.log('add media');
  }, [story]);

  return (
    <>
      <header className={styles.headerPanel}>
        <StoryHeaderComponent story={story} />
      </header>
      <div className={styles.addItemPanel}>
        <button className={styles.addCard} onClick={addCard}>
          Add card
        </button>
        <input type="text" placeholder="Type or paste something here" className={styles.input} />
        <button className={styles.addMedia} onClick={addMedia}>
          Image / Video / Audio / PDF
        </button>
      </div>
      <div className={styles.filterPanel}>
        <hr className={styles.line} />
        <button className={styles.button}></button>
      </div>
      <div className={styles.switcherPanel}>
        <button className={styles.button} onClick={() => changeView(1)}>
          L
        </button>
        <button className={styles.button} onClick={() => changeView(2)}>
          S
        </button>
      </div>
      <section className={styles.items}>
        <ItemsListComponent items={items} />
      </section>
    </>
  );
};

export default StoryComponent;
