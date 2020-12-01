import ArticleLink from 'components/ArticleLink';
import PropTypes from 'prop-types';
import styles from './ArticleList.module.scss';

const ArticleList = ({ list }) => {
	return (
		<nav className={styles.container}>
			<ul className={styles.containerList}>
				{list.map((item) => {
					return (
						<li>
							<ArticleLink {...item} />
						</li>
					);
				})}
			</ul>
		</nav>
	);
};

ArticleList.propTypes = {
	list: PropTypes.array.isRequired,
};

export default ArticleList;
