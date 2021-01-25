import PropTypes from 'prop-types';
import classNames from 'classnames';
import colorScheme from 'styles/colorScheme';
import styles from './ArticleCover.module.scss';

const ArticleCover = ({path, type}) => {
	return (
		<div className={classNames('center', styles.container)} style={{background: colorScheme[type]}}>
			{type}
		</div>
	)
};

ArticleCover.propTypes = {
	path: PropTypes.string,
	type: PropTypes.string
};

export default ArticleCover;
