import {post} from 'services/axios/request';

const ARTICLES_URL = `https://graphql.contentful.com/content/v1/spaces/${process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID}`;

const ArticleService = {
	getPublishedArticles: () => {
		const body = {
			query: `
				{
					articleCollection(limit: 100) {
						items {
							title
							excerpt
							tags
							readTime,
							slug,
							date
						}
					}
				}
			`
		}
		return post(ARTICLES_URL, body).then(res => res)
	},

	getPublishedArticleBySlug: (slug) => {
		const body = {
			query:`
				query ($slug: String!) {
					articleCollection(where:{
						slug: $slug
					}) {
						items {
						title
						date
						excerpt
						readTime
						content
						slug
						tags
						}
					}
				}
			`,
			variables: {slug: slug}
		}
		return post(ARTICLES_URL, body).then(res => res)
	}

}

export default ArticleService;
export {ArticleService};
