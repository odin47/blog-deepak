import PropTypes from 'prop-types';

const Input = ({value, handleChange, type}) => {
    return <input value={value} onChange={handleChange} type={type}/>
}

Input.propTypes = {
	value: PropTypes.string,
    handleChange: PropTypes.func,
    type: PropTypes.string
};

Input.default = {
    type: 'text'
};

export default Input;
