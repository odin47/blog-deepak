import ArticleList from 'components/ArticleList';
import Intro from 'components/Intro';
import Layout from 'components/Layout';
import { getSortedPosts } from 'lib/posts';

export default function Home({ allPostsData }) {
	console.log(allPostsData);
	return (
		<div>
			<Layout>
				<Intro />
				<ArticleList list={allPostsData} />
			</Layout>
		</div>
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
