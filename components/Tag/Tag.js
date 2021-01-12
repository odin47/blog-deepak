import PropTypes from 'prop-types';
import colors from './colorScheme';
import styles from './Tag.module.scss';

const Tag = ({tagName}) => {
    console.log(colors[tagName]);
    return (
        <a className={styles.tag} href={`/tags/${tagName}`} style={{background: colors[tagName]}}>{tagName}</a>
    )
}

Tag.propTypes = {
    tagName: PropTypes.string.isRequired
}

export default Tag;
