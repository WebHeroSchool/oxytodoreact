import React from 'react';
import classnames from 'classnames';
import styles from './Item.module.css';
import PropTypes from 'prop-types';

class Item extends React.Component{
	componentDidMount() {
		this.timerID = setInterval(() => console.log('Утечка памяти1'),1000);
	}

	componentDidUpdate() {
		console.log('componentUpDate1');
	}

	componentWillUnmount() {
		clearInterval(this.timerID);
	}


    render(){
    	const {value,isDone,id} = this.props;
    	return (<span className={
	        classnames({
                [styles.item]: true,
                [styles.done]: isDone
	        })
        }>
            {value}
        </span>);

    }
}

Item.propTypes = {
	value: PropTypes.string,
	isDone: PropTypes.bool.isRequired
};

export default Item;