import {post} from 'services/axios/request';

const ARTICLES_URL = `https://graphql.contentful.com/content/v1/spaces/${process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID}`;

const UserService = {
	getAboutPageInfo: () => {
		const body = {
			query: `
				{
					aboutPageCollection {
						items {
							mainIntro
							detailedIntro
						}
					}
				}
			`
		}
		return post(ARTICLES_URL, body).then(res => res)
	},

	getFooterPageInfo: () => {
		const body = {
			query: `
				{
					footerCollection(where: {
					title: "footer"
					}) {
						items {
						linkedin
						github
						dev
						twitter
						developerName
					}
				}
			}`
		}
		return post(ARTICLES_URL, body).then(res => res)
	}

}

export default UserService;
export {UserService}