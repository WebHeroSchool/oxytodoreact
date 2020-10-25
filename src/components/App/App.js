import React from 'react';
import InputItem from '../InputItem/InputItem.js';
import ItemList from '../ItemList/ItemList.js';
import Footer from '../Footer/Footer.js';
import './App.css';

const todoItem = 'Написать приложение';

const App = () =>{
    const items = [
        {
        	value: 'Написать приложение'
        },
        {
        	value: 'Прочитать теорию'
        },
        {
        	value: 'Сдать задание'
        }
    ];

    return(
 	<div className="wrap">
	  <h1 className="wrap_title">Важные дела</h1>
	  <InputItem />
	  <ItemList items={items} />
	  <Footer count ={3} />
    </div>);
}

export default App;

