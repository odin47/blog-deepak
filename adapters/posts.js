import {Posts} from 'services';
import {getFormattedDate} from 'services/utils/common';

const getArticles = async() => {
	const articleList = await Posts.getPublishedArticles();
	return articleList.data.data.articleCollection.items
}

const getArticleBySlug = async(slug) => {
	const articleData = await Posts.getPublishedArticleBySlug(slug);
	const {date} = articleData.data.data.articleCollection.items[0];
	articleData.data.data.articleCollection.items[0].date = getFormattedDate(date);
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