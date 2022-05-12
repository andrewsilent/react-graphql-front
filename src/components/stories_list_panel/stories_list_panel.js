import React, { useCallback } from 'react';
import styles from './stories_list_panel.module.scss';

const StoriesListPanelComponent = props => {
  const { channel, changeView } = props;

  const createMix = useCallback(() => {
    // eslint-disable-next-line no-undef
    console.log(`Create new mix in channel ${channel.id}`);
  }, [channel]);

  return (
    <>
      <div className={styles.wrapper}>
        <h2 className={styles.title}>Your mixes</h2>
        <button className={styles.button} onClick={createMix}>
          New mix
        </button>
      </div>
      <div className={styles.filter}>
        <ul className={styles.selectorList}>
          <li className={styles.selectorItem}>
            <div className={styles.selector}>
              <fieldset className={styles.selectorWrapper}>
                <legend className={styles.caption}>Filter</legend>
                <ul>
                  <li>All</li>
                  <li>Published</li>
                  <li>Unpublished</li>
                </ul>
              </fieldset>
            </div>
          </li>
          <li className={styles.selectorItem}>
            <div className={styles.selector}>
              <fieldset className={styles.selectorWrapper}>
                <legend className={styles.caption}>Mix types</legend>
                <ul>
                  <li>All</li>
                  <li>News Feed</li>
                  <li>Mix List</li>
                  <li>Pinned to Channel</li>
                  <li>Pinned to Org</li>
                  <li>Synced</li>
                  <li>Readers</li>
                  <li>Editor Limited</li>
                </ul>
              </fieldset>
            </div>
          </li>
        </ul>
        <div className={styles.switcher}>
          <button className={styles.switch} onClick={() => changeView(1)}>
            L
          </button>
          <button className={styles.switch} onClick={() => changeView(2)}>
            S
          </button>
        </div>
      </div>
    </>
  );
};

export default StoriesListPanelComponent;
