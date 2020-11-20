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
            ]    
    };
    
    onClickDone = id => {
        const newItemList = this.state.items.map(item=>{
            const newItem = { ...item};

            if(item.id===id) {
                newItem.isDone = !item.isDone;
            }

            return newItem;
        });

        this.setState({ items: newItemList });
    };
    
    onClickDelete = id => this.setState(state=>({ items: state.items.filter(item=>item.id !=id)}));

    render() {
        return(
            <div className={styles.wrap}>
                <h1 className={styles.title}>Важные дела</h1>
                <InputItem />
                <ItemList items={this.state.items} onClickDone={this.onClickDone} onClickDelete={this.onClickDelete} />
                <Footer count ={6} />
            </div>);
    }
};

export default App;

