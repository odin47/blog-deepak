import Article from 'components/Article';
import Layout from 'components/Layout';
import { getSortedPosts } from 'lib/posts';


export default function Post ({ post }) {
	return (
		<Layout>
			<div className={'mainContainer topPadding pagePadding'}>
				<Article heading={post} content={post.content}/>
			</div>
		</Layout>
	)
};

export async function getStaticPaths() {
	const allPostsData = getSortedPosts();

	const paths = allPostsData.map( post => ({
		params: {pid: post.slug}
	}));

	return { paths, fallback: false }
};

export async function getStaticProps({ params }) {
	const allPostsData = getSortedPosts();
	const post = allPostsData.find( item => item.slug === params.pid);
	return {
		props: {
			post
		},
	};
}