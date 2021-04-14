import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';

import styles from './Notification.module.scss';
const Notification = ({message, type}) => {
    const [state, setState] = useState(true);
    useEffect(() => {
        setState(true);
        setTimeout(() => {
            setState(false);
        }, 3000);
    }, []);
    
    return (
        state && <div className={`${styles.notificationWrapper} ${ type === 'success' ? styles.notificationItemSuccess : styles.notificationItemFailure} ${state ? styles.notificationVisible : styles.notificationInvisible}`}>
            <p>{message}</p>
        </div>
    )
}

Notification.propTypes = {
    message: PropTypes.string,
    type: PropTypes.oneOf(['success', 'failure']),
}

Notification.default = {
    type: 'success',
}

export default Notification;