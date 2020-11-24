import React from 'react';

const Footer = ({ count}) =>
    (<span>
 	    Осталось выполнить дел:{count}
    </span>);

Footer.defaultProps = {
    	count: 0
    };

export default Footer;

