import Head from 'next/head';
import Layout from 'components/Layout';
import ArticleCover from 'components/ArticleCover';
import ArticleList from 'components/ArticleList';
import { getSortedPosts, getTagsList } from 'lib/posts';
import {getArticleByTag} from 'adapters/posts';
import { getFooterInfo } from 'adapters/user';

export default function Tag ({params, posts, footerInfo}) {
	return (
		<Layout footerInfo={footerInfo}>
			<Head>
				<title>Tags page | {params.tag}</title>
			</Head>
			<div className={'mainContainer'}>
				<ArticleCover type={params.tag} />
				<ArticleList list={posts} />
			</div>
		</Layout>
	)
};

export async function getStaticPaths() {
	const allTags = getTagsList();

	const paths = allTags.map( item => ({
		params: {tag: item}
	}));

	return { paths, fallback: false }
};

export async function getStaticProps({ params }) {
	const posts = await getArticleByTag(params.tag);
	const footerInfo = await getFooterInfo();

	return {
		props: {
			params,
			posts,
			footerInfo
		},
	};
}
