import {
	flattenArray,
	getDirectoryPath,
	getFileContentSync,
	getFileNameListSync,
	getFormattedDate,
	getMarkdownContent
} from 'services/utils/common';

const getPostContent= (fileName) => {
	return getMarkdownContent(
		getFileContentSync(
			getDirectoryPath(`posts/${fileName}`)
		)
	);
};

const getSortedPosts = (tag) => {

	const fileNames = getFileNameListSync(getDirectoryPath('posts'));

	const allPostsData = fileNames.filter( item => {
		if(typeof tag !== 'undefined') {
			const { data } = getPostContent(item);
			if(data.tags.indexOf(tag) !== -1) {
				return item
			}
		} else {
			return item
		}
	}).map( fileName => {
		const slug = fileName.replace('.md', '');
		const { content, data } = getPostContent(fileName);
		const formattedDate = getFormattedDate(data.date);
		const frontmatter = {
			content,
			...data,
			date: formattedDate,
		};
		return {
			slug,
			...frontmatter,
		};
	})

	return allPostsData.sort((a, b) => {
		if (new Date(a.date) < new Date(b.date)) {
			return 1;
		} else {
			return -1;
		}
	});
};

const getTagsList = () => {
	const fileNames = getFileNameListSync(getDirectoryPath('posts'));
	const tagsList = fileNames.map( fileName => {
		const { data } = getPostContent(fileName);
		return data.tags
	});
	return flattenArray(tagsList)
};

export {
	getSortedPosts,
	getTagsList
}
