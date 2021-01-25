import Link from 'next/link';
import PropTypes from 'prop-types';
import colors from 'styles/colorScheme';
import styles from './Tag.module.scss';

const Tag = ({tagName}) => {
	return (
		<Link  href={`/tags/${tagName}`} passHref>
			<a className={styles.tag} style={{background: colors[tagName]}}>{tagName}</a>
		</Link>
	)
}

Tag.propTypes = {
	tagName: PropTypes.string.isRequired
}

export default Tag;
