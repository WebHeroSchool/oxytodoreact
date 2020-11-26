import React from 'react';
import classnames from 'classnames';
import styles from './Item.module.css';
import PropTypes from 'prop-types';

class Item extends React.Component{
	componentDidMount() {
		console.log('componentDidMount');
	}

	componentDidUpdate() {
		console.log('componentUpDate');
	}

	componentWillUnmount() {
		console.log('componentWillUnmount');
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