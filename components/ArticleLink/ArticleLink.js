import Link from 'next/link';
import PropTypes from 'prop-types';
import Tag from 'components/Tag';
import styles from './ArticleLink.module.scss';

const ArticleLink = ({ date, excerpt, isLink, readTime, slug, tags, title }) => {
	return (
		<div className={styles.container}>
			{
				isLink ? 
				<Link href={`/post/${slug}`}>
					<h2 className={styles.title}>{title}</h2>
				</Link>
				:
				<h1 className={styles.title}>{title}</h1>
			}
			<p className={styles.excerpt}>{excerpt}</p>
			<div className={styles.metadata}>
				<div>
					{
						isLink ? 
							<Tag tagName={tags[0]}/>
						:
							tags.map( tag => (
								<Tag tagName={tag}/>
							))
					}
				</div>
				<div>👓 {readTime} min read</div>
				{
					!isLink && <div className={styles.date}>{date}</div>
				}
			</div>
		</div>
	);
};

ArticleLink.propTypes = {
	date: PropTypes.string.isRequired,
	excerpt: PropTypes.string.isRequired,
	isLink: PropTypes.bool,
	title: PropTypes.string.isRequired,
	readTime: PropTypes.number.isRequired,
};

ArticleLink.defaultProps = {
	isLink: true
};

export default ArticleLink;
