import React from 'react';
import PropTypes from 'prop-types';
import styles from '../Footer/Footer.module.css';

const Footer = ({ count}) =>
    (<div className={styles.footer}>
        <button className={styles.footer_button}>
            <span className={styles.footer_item}>
 	            Выполнено: {}
            </span>
        </button>
        <button className={styles.footer_button}>
            <span className={styles.footer_item}>
                 Осталось дел: {count}
            </span>
        </button>
        <button className={styles.footer_button}>
            <span className={styles.footer_item}>
                Всего дел: {}
            </span>
        </button>
    </div>);

Footer.propTypes = {
	count: PropTypes.number.isRequired
}

export default Footer;

