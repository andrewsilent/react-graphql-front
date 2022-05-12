import React, { useCallback, useMemo } from 'react';
import styles from './item_component.module.scss';

const ItemComponent = props => {
  const { item } = props;

  const domain = useMemo(() => {
    if (item.url) {
      return item.url.split('://')[1].split('.')[0];
    }
  }, [item]);

  const createdAt = useMemo(() => {
    const date = new Date();
    return date.toDateString();
  }, [item]);

  const cardType = useMemo(() => {
    if (item.type === 'editorial') {
      return 'Text';
    } else {
      return 'Article';
    }
  }, [item]);

  const teaserStyle = useMemo(() => 'Standard', [item]);

  const unpublishItem = useCallback(() => {
    // eslint-disable-next-line no-undef
    console.log(`unpublish item ${item.id}`);
  }, [item]);

  const addComment = useCallback(() => {
    // eslint-disable-next-line no-undef
    console.log(`add comment to item ${item.id}`);
  }, [item]);

  const editCard = useCallback(() => {
    // eslint-disable-next-line no-undef
    console.log(`edit item ${item.id}`);
  }, [item]);

  const showDropdown = useCallback(() => {
    // eslint-disable-next-line no-undef
    console.log(`show dropdown menu`);
  }, [item]);

  const renderEditorial = useMemo(
    () => (
      <div className={styles.editorial}>
        {item.sourceName && <h6 className={styles.sourceName}>{item.sourceName}</h6>}
        {item.headline && <h6 className={styles.headline}>{item.headline}</h6>}
        {item.subHeadline && <h6 className={styles.subHeadline}>{item.subHeadline}</h6>}
        {item.text && <p className={styles.text}>{item.text}</p>}
      </div>
    ),
    [item]
  );

  const renderArticle = useMemo(
    () => (
      <div className={styles.article}>
        <figure className={styles.cardImgWrapper}>
          {item.imageUrl && (
            <>
              <img src={item.imageUrl} className={styles.img} />
              <div style={{ backgroundImage: `url(${item.imageUrl})` }} className={styles.imageUrl}></div>
            </>
          )}
        </figure>
        <div>
          {item.url && (
            <a
              href={item.url}
              className={styles.link}
              target="_blank"
              rel="noopener noreferrer"
              title="View source page"
            >
              {domain}
            </a>
          )}
          {item.title && <h6 className={styles.title}>{item.title}</h6>}
          {item.abstract && <p className={styles.abstract}>{item.abstract}</p>}
        </div>
      </div>
    ),
    [item]
  );

  return (
    <article className={styles.card}>
      <header className={styles.cardPanel}>
        <div className={styles.leftSide}>
          <span className={styles.cardType}>{cardType}</span>
          <span className={styles.teaserStyle}>{teaserStyle}</span>
        </div>
        <div className={styles.rightSide}>
          <button className={styles.editCard} onClick={editCard}>
            Edit
          </button>
          <button className={styles.dropdown} onClick={showDropdown}></button>
        </div>
      </header>
      {item.type === 'editorial' && renderEditorial}
      {item.type === 'article' && renderArticle}
      <footer className={styles.footerPanel}>
        <div className={styles.info}>
          <div className={styles.description}>
            <span className={styles.createdBy}>{item.userId}</span>
            <span className={styles.createdAt}>{`created this on ${createdAt}`}</span>
            <span className={styles.stats}>0 reactions | 0 comment(s)</span>
          </div>
          <button className={styles.publish} onClick={unpublishItem}>
            Unpublish
          </button>
        </div>
        <div className={styles.commentsPanel}>
          <button className={styles.addComment} onClick={addComment}>
            Add a comment
          </button>
        </div>
      </footer>
    </article>
  );
};

export default ItemComponent;
