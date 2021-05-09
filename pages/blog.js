import Head from 'next/head';
import Layout from 'components/Layout';
import TagList from 'components/TagList';
import ArticleList from 'components/ArticleList';
import {getTagsList} from 'lib/posts';
import {getArticles} from 'adapters/posts';
import { getFooterInfo } from 'adapters/user';

export default function Blog({allTagsList, allPostsData, footerInfo}) {
	return (
		<Layout footerInfo={footerInfo}>
			<Head>
				<title>Blog page</title>
			</Head>
			<div className={'mainContainer'}>
				<TagList list={allTagsList}/>
				<ArticleList list={allPostsData}/>
			</div>
		</Layout>
	)
}

export async function getStaticProps() {
	const allTagsList = getTagsList();
	const allPostsData = await getArticles();
	const footerInfo = await getFooterInfo();

	return {
		props: {
			allTagsList,
			allPostsData,
			footerInfo
		},
	};
}
