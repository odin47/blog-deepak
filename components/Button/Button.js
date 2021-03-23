import PropTypes from 'prop-types';
import styles from './Button.module.scss';

const Button = ({children, handleAction}) => {
    return <button className={styles.buttonContainer} onClick={handleAction}>{children}</button>
}

Button.propTypes = {
	children: PropTypes.string,
    handleAction: PropTypes.func
};

Button.default = {
    children: 'Click me'
}

export default Button;
