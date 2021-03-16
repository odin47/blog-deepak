import PropTypes from 'prop-types';


const Button = ({children}) => {
    return <button>{children}</button>
}

Button.propTypes = {
	children: PropTypes.string,
};

Button.default = {
    children: 'Click me'
}

export default Button;
