import Head from 'next/head';
import Layout from 'components/Layout';
import Avatar from 'components/Avatar';
import {getAboutInfo, getFooterInfo} from 'adapters/user';

const About = ({aboutInfo:{mainIntro, detailedIntro}, footerInfo}) => {
    return (
        <Layout footerInfo={footerInfo}>
            <Head>
				<title>About page</title>
			</Head>
            <div className={'mainContainer'}>
                <div className={'vcenter'}>
                    <h1>{mainIntro}</h1>
                </div>
                <div className={'topMargin3'}>
                    <Avatar />
                </div>
                <p className={'topMargin3'}>
                    {detailedIntro}
                </p>
            </div>
        </Layout>
    )
}

export async function getStaticProps() {
	const aboutInfo = await getAboutInfo();
	const footerInfo = await getFooterInfo();
	
    return {
		props: {
			aboutInfo,
            footerInfo
		},
	};
}

export default About;
