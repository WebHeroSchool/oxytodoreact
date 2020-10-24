import React from 'react';
import InputItem from '../InputItem/InputItem.js';
import ItemList from '../ItemList/ItemList.js';
import Footer from '../Footer/Footer.js';

const todoItem = 'Написать приложение';

const App = () => (<div>
	<h1>todos</h1>
	<InputItem />
	<ItemList todoItem={todoItem} />
	<Footer count={3} />
</div>)

export default App;

