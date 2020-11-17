import React from 'react';
import Item from '../Item/Item.js'
import DeleteIcon from '@material-ui/icons/Delete';
import Checkbox from '@material-ui/core/Checkbox';

const ItemList = ({items}) => (<ul>
    {items.map(item =><div key={item.value}><Checkbox />
    	<Item value={item.value} isDone={item.isDone} />
    <DeleteIcon /></div>)}
</ul>);

export default ItemList;

