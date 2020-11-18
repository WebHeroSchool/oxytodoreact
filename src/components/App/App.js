import React from 'react';
import InputItem from '../InputItem/InputItem.js';
import ItemList from '../ItemList/ItemList.js';
import Footer from '../Footer/Footer.js';
import styles from './App.module.css';

class App extends React.Component {
    state = {
        items:[
                {
                    value: 'Написать приложение',
                    isDone: false
                },
                {
                    value: 'Прочитать теорию',
                    isDone: false
                },
                {
                    value: 'Сдать задание',
                    isDone: true
                }
            ]
    };
    
    onClickDone = isDone => console.log (isDone);

    render() {
        return(
            <div className={styles.wrap}>
                <h1 className={styles.title}>Важные дела</h1>
                <InputItem />
                <ItemList items={this.state.items} onClickDone={this.onClickDone} />
                <Footer count ={3} />
            </div>);
    }
};

export default App;

