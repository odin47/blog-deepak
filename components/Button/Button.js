import PropTypes from 'prop-types';


const Button = ({children, handleAction}) => {
    return <button onClick={handleAction}>{children}</button>
}

Button.propTypes = {
	children: PropTypes.string,
    handleAction: PropTypes.func
};

Button.default = {
    children: 'Click me'
}

export default Button;
