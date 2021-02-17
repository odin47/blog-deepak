import Head from 'next/head';
import ArticleList from 'components/ArticleList';
import Intro from 'components/Intro';
import Layout from 'components/Layout';
import { getSortedPosts } from 'lib/posts';

export default function Home({ allPostsData }) {
	return (
		<Layout>
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
	const allPostsData = getSortedPosts();
	return {
		props: {
			allPostsData,
		},
	};
}
