import PropTypes from 'prop-types';
import styles from './Input.module.scss';

const Input = ({value, handleChange, type, placeholder}) => {
    return <input className={styles.inputContainer} value={value} onChange={handleChange} type={type} placeholder={placeholder} />
}

Input.propTypes = {
	value: PropTypes.string,
    handleChange: PropTypes.func,
    type: PropTypes.string,
    placeholder: PropTypes.string
};

Input.default = {
    type: 'text',
    placeholder: ''
};

export default Input;
