import Head from 'next/head';
import Article from 'components/Article';
import ArticleCover from 'components/ArticleCover';
import Layout from 'components/Layout';
import { getArticles, getArticleBySlug } from 'adapters/posts';


export default function Post ({ post }) {
	return (
		<Layout>
			<Head>
				<title>{post.title}</title>
			</Head>
			<div className={'mainContainer topPadding pagePadding'}>
				{
					post && post.cover && <ArticleCover path={post.cover} />
				}
				<Article heading={post} content={post.content} />
			</div>
		</Layout>
	)
};

export async function getStaticPaths() {
	const allPostsData = await getArticles();
	const paths = allPostsData.map( post => ({
		params: {pid: post.slug}
	}));

	return { paths, fallback: false }
};

export async function getStaticProps({ params }) {
	const post = await getArticleBySlug(params.pid);
	return {
		props: {
			post
		},
	};
}