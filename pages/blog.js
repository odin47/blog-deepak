import Head from 'next/head';
import Layout from 'components/Layout';
import TagList from 'components/TagList';
import ArticleList from 'components/ArticleList';
import {getTagsList, getSortedPosts} from 'lib/posts';

export default function Blog({allTagsList, allPostsData}) {
    return (
        <Layout>
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
	const allPostsData = getSortedPosts();
    return {
		props: {
			allTagsList,
            allPostsData
		},
	};
}
