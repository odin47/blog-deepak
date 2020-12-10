import ArticleLink from 'components/ArticleLink';
import PropTypes from 'prop-types';
import styles from './ArticleList.module.scss';

const ArticleList = ({ list }) => {
	return (
		<nav className={styles.container}>
			<ul className={styles.containerList}>
				{list.map((item, index) => {
					return (
						<li key={`${item.title}-${index}`}>
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
