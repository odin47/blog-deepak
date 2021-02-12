import Image from 'next/image'
import PropTypes from 'prop-types';
import classNames from 'classnames';
import colorScheme from 'styles/colorScheme';
import styles from './ArticleCover.module.scss';

const TagCover = ({type}) => {
	return (
		<div className={classNames('center', styles.container)} style={{background: colorScheme[type]}}>
			{type}
		</div>
	)
}

const ImageCover = ({path}) => {
	return (
		<div className={classNames('center', styles.container)}>
			<Image src={`/post_covers/${path}`} alt="cover image" layout='fill' />
		</div>
	)
}

const ArticleCover = ({path, type}) => {
	if(path) {
		return <ImageCover path={path} />
	} else {
		return <TagCover type={type} />
	}
};

ArticleCover.propTypes = {
	path: PropTypes.string,
	type: PropTypes.string
};

ArticleCover.default = {
	type: 'Tag'
}

export default ArticleCover;
