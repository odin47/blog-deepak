import Layout from 'components/Layout';
import { getTagsList } from 'lib/posts';

export default function Tag ({params}) {
	return (
		<Layout>
			<div>
				{params.tag}
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
	return {
		props: {
			params
		},
	};
}
