import React from 'react';
import Item from '../Item/Item.js'
import DeleteIcon from '@material-ui/icons/Delete';
import Checkbox from '@material-ui/core/Checkbox';
import styles from '../ItemList/ItemList.module.css';

const ItemList = ({items}) => (<ul>
    {items.map(item =><div className={styles.item_list} key={item.value}><Checkbox />
    	<Item value={item.value} isDone={item.isDone} /><div className={styles.item_wrap}></div>
    <DeleteIcon /></div>)}
</ul>);

export default ItemList;

