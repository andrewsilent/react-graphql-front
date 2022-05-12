import React from 'react';
import styles from './items_list.module.scss';
import ItemComponent from '../item_component/item_component';

const ItemsListComponent = props => {
  const { items } = props;
  return <>{items && items.map(e => <ItemComponent key={e.id} item={e} />)}</>;
};

export default ItemsListComponent;
