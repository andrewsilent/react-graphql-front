import React, { useCallback } from 'react';
import cx from 'classnames';
import styles from './story_header.module.scss';

const StoryHeaderComponent = props => {
  const { story } = props;

  const viewComments = useCallback(() => {
    // eslint-disable-next-line no-undef
    console.log(`view comments of story ${story.id}`);
  }, [story]);

  const unpublish = useCallback(() => {
    // eslint-disable-next-line no-undef
    console.log(`unpublish story ${story.id}`);
  }, [story]);

  return (
    <>
      <div className={styles.header}>
        <h1 className={styles.title}>{story ? story.title : 'Select mix'}</h1>
        <div className={styles.searchWrapper}>
          <input type="text" className={styles.search} placeholder="search for..." />
        </div>
      </div>
      <div className={styles.selectorPanel}>
        <div className={styles.customisationPanel}>
          <div className={styles.selectorList}>
            <div className={styles.selector}>
              <span className={styles.caption}>Comments under Cards</span>
              <fieldset className={styles.selectorWrapper}>
                <ul>
                  <li>First</li>
                  <li>Most liked</li>
                  <li>Manual</li>
                </ul>
              </fieldset>
            </div>
            <div className={styles.selector}>
              <fieldset className={styles.selectorWrapper}>
                <ul>
                  <li>Display user</li>
                </ul>
              </fieldset>
            </div>
            <div className={styles.selector}>
              <span className={styles.caption}>Teaser style</span>
              <fieldset className={styles.selectorWrapper}>
                <ul>
                  <li>Standard</li>
                  <li>Small</li>
                  <li>Small w/o Intro</li>
                  <li>Big w/o Intro</li>
                  <li>Custom</li>
                </ul>
              </fieldset>
            </div>
          </div>
        </div>
        <div className={styles.controlPanel}>
          <button className={cx(styles.button, styles.comments)} onClick={viewComments}>
            View comments
          </button>
          <button className={cx(styles.button, styles.publish)} onClick={unpublish}>
            Unpublish mix
          </button>
        </div>
      </div>
    </>
  );
};

export default StoryHeaderComponent;
