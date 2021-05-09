import Head from 'next/head';
import ArticleList from 'components/ArticleList';
import Intro from 'components/Intro';
import Layout from 'components/Layout';
import { getArticles } from 'adapters/posts';
import { getFooterInfo } from 'adapters/user';

export default function Home({ allPostsData, footerInfo }) {
	return (
		<Layout footerInfo={footerInfo}>
			<Head>
				<title>Home page</title>
			</Head>
			<div className={'mainContainer'}>
				<Intro />
				<ArticleList list={allPostsData} />
			</div>
		</Layout>
	);
}

export async function getStaticProps() {
	const allPostsData = await getArticles();
	const footerInfo = await getFooterInfo();
	return {
		props: {
			allPostsData,
			footerInfo,
		},
	};
}
