import React from 'react';
import PropTypes from 'prop-types';
import styles from '../Footer/Footer.module.css';

const Footer = ({ onClickFilter, count}) =>
    (<div className={styles.footer}>
        <button  onClick= {() => onClickFilter("done")} className={styles.footer_button}>
            <span className={styles.footer_item}>
 	            Выполнено: {}
            </span>
        </button>
        <button onClick= {() => onClickFilter("active")} className={styles.footer_button}>
            <span className={styles.footer_item}>
                 Осталось дел: {count}
            </span>
        </button>
        <button onClick= {() => onClickFilter("all")} className={styles.footer_button}>
            <span className={styles.footer_item}>
                Всего дел: {}
            </span>
        </button>
    </div>);

Footer.propTypes = {
	count: PropTypes.number.isRequired
}

export default Footer;

