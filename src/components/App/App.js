import React, {useState} from 'react';
import InputItem from '../InputItem/InputItem.js';
import ItemList from '../ItemList/ItemList.js';
import Footer from '../Footer/Footer.js';
import styles from './App.module.css';

const App = () => {
    const state = {
        items :[
            {
                value: 'Написать приложение',
                isDone: false,
                id: 1   
            },
            {
                value: 'Прочитать теорию',
                isDone: false,
                id: 2
            },
            {
                value: 'Сдать задание',
                isDone: true,
                id: 3
            }
        ],
        count:3
    };
    const [items,setItems] = useState(state.items);
    const [count,setCount] = useState(state.count);


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

    const onClickDelete = id => setItems(items.filter(item => item.id !==id));

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

    return(
            <div className={styles.wrap}>
                <h1 className={styles.title}>Важные дела</h1>
                <InputItem  onClickAdd={onClickAdd} />
                <ItemList 
                    items={items}
                    onClickDone={onClickDone} 
                    onClickDelete={onClickDelete} />
                <Footer count={count} />
            </div>
    );
};

export default App;

