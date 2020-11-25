import React from 'react';
import PropTypes from 'prop-types';

const Footer = ({ count}) =>
    (<span>
 	    Осталось выполнить дел:{count}
    </span>);

Footer.propTypes = {
	count: PropTypes.number.isRequired
}

export default Footer;

