import {Posts} from 'services';

const getArticles = async() => {
	const articleList = await Posts.getPublishedArticles();
	return articleList.data.data.articleCollection.items
}

const getArticleBySlug = async(slug) => {
	const articleData = await Posts.getPublishedArticleBySlug(slug);
	return articleData.data.data.articleCollection.items[0];
}

const getArticleByTag = async(tag) => {
	const articleData = await Posts.getPublishedArticleByTag(tag);
	return articleData.data.data.articleCollection.items;
}

export {
	getArticles,
	getArticleBySlug,
	getArticleByTag
}