import Layout from 'components/Layout';
import TagList from 'components/TagList';
import {getTagsList} from 'lib/posts';

export default function Blog({allTagsList}) {
    return (
        <Layout>
            <div className={'mainContainer'}>
                <TagList list={allTagsList}/>
            </div>
        </Layout>
    )
}

export async function getStaticProps() {
    const allTagsList = getTagsList();
    return {
		props: {
			allTagsList,
		},
	};
}
