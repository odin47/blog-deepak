import PropTypes from 'prop-types';
import ReactMarkdown from 'react-markdown'
import ArticleLink from 'components/ArticleLink';
import styles from './Article.module.scss';


const Article = ({heading, content}) => {

	return (
		<>
			<ArticleLink {...heading} />
			<ReactMarkdown children={content}/>
		</>
	)
};

Article.propTypes = {
	heading: PropTypes.object.isRequired,
	content: PropTypes.string.isRequired
};

export default Article;