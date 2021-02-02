import PropTypes from 'prop-types';
import ReactMarkdown from 'react-markdown';
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter'
import ArticleLink from 'components/ArticleLink';

import styles from './Article.module.scss';

const Article = ({heading, content}) => {

	const renderers = {
		code: ({language, value}) => {
		return <SyntaxHighlighter language={language} children={value} />
		}
	}

	return (
		<>
			<ArticleLink {...heading} isLink={false}/>
			<ReactMarkdown className={styles.markdown} renderers={renderers} children={content}/>
		</>
	)
};

Article.propTypes = {
	heading: PropTypes.object.isRequired,
	content: PropTypes.string.isRequired
};

export default Article;