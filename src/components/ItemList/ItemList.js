import React from 'react';
import Item from '../Item/Item.js'

const ItemList = ({todoItem}) => (<ul>
	<li><Item todoItem={todoItem} /></li>
	<li><Item todoItem={'Прочитать теорию'} /></li>
	<li><Item todoItem={'Сдать задание'} /></li>
</ul>);

export default ItemList;

