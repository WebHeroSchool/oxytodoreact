import React from 'react';
import Item from '../Item/Item.js'
import DeleteIcon from '@material-ui/icons/Delete';
import Checkbox from '@material-ui/core/Checkbox';
import styles from '../ItemList/ItemList.module.css';

const ItemList = ({items, onClickDone}) => (<ul>
    {items.map(item =><div className={styles.item_list} key={item.value}>
    	<Checkbox
    	    checked={item.isDone}
    	    tabIndex={-1}
    	    onClick={()=>onClickDone(item.isDone)}
    	/>
    	<Item value={item.value} isDone={item.isDone} onClickDone={onClickDone} />
    	<div className={styles.item_wrap}></div>
    <DeleteIcon /></div>)}
</ul>);

export default ItemList;

