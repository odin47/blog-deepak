import Link from 'next/link';
import PropTypes from 'prop-types';
import styles from './ArticleLink.module.scss';

const ArticleLink = ({ date, excerpt, readTime, slug, title }) => {
	return (
		<div className={styles.container}>
			<Link href={`/post/${slug}`}>
				<h1 className={styles.title}>{title}</h1>
			</Link>
			<p className={styles.excerpt}>{excerpt}</p>
			<div className={styles.metadata}>
				<div>👓 {readTime} min read</div>
				<div>{date}</div>
			</div>
		</div>
	);
};

ArticleLink.propTypes = {
	date: PropTypes.string.isRequired,
	excerpt: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	readTime: PropTypes.number.isRequired,
};

export default ArticleLink;
