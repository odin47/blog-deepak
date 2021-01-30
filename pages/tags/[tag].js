import Layout from 'components/Layout';
import ArticleCover from 'components/ArticleCover';
import ArticleList from 'components/ArticleList';
import { getSortedPosts, getTagsList } from 'lib/posts';

export default function Tag ({params, posts}) {
	return (
		<Layout>
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
	//TODO - get all the posts with a specific tag
	const posts = getSortedPosts(params.tag);
	console.log(posts);
	return {
		props: {
			params,
			posts
		},
	};
}
