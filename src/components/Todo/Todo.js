import React, {useState,useEffect} from 'react';
import InputItem from '../InputItem/InputItem.js';
import ItemList from '../ItemList/ItemList.js';
import Footer from '../Footer/Footer.js';
import styles from './Todo.module.css';

const Todo = () => {
    const state = {
        items: JSON.parse(localStorage.getItem("items")) || [ ],
        filter:"all",   
        count:0
    };
    const [items,setItems] = useState(state.items);
    const [count,setCount] = useState(state.count);
    const [item,setfilter] = useState(state.filter);

    useEffect(() => {
    localStorage.setItem("items",JSON.stringify(items));
});

    const onClickDone = id => {
        const newItemList = items.map(item => {
            const newItem = { ...item};

            if(item.id===id) {
                newItem.isDone = !item.isDone;
            }

            return newItem;
        });

        setItems(newItemList);
    };

    const onClickDelete = id => {
        setItems(items.filter(item => item.id !==id));

        setCount(count - 1);
    };

    const onClickAdd = value => {
        setItems([
            ...items,
            {
                value ,
                isDone: false,
                id: count + 1
            }
        ]);
        setCount(count + 1);
    };

    filterItems = (items,filter) => {
        if(filter === 'all') {
            return items;
        } else if (filter === 'activ') {
            return items.filter((item) => (!item.isDone));
        } else if (filter === 'done') {
            return items.filter((item) => item.isDone);
        }
    };

    onFilterChange = (filter) = {
        setfilter
    };
    
    return(
            <div className = {styles.wrap}>
                <h1 className = {styles.title}>Важные дела</h1>
                <InputItem  onClickAdd = {onClickAdd} />
                <ItemList 
                    items = {items}
                    onClickDone = {onClickDone} 
                    onClickDelete = {onClickDelete} />
                <Footer count = {count} />
            </div>
    );
};

export default Todo;

