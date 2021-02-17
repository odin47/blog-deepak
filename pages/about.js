import Head from 'next/head';
import Layout from 'components/Layout';
import Avatar from 'components/Avatar';

const About = () => {
    return (
        <Layout>
            <Head>
				<title>About page</title>
			</Head>
            <div className={'mainContainer'}>
                <div className={'vcenter'}>
                    <h1>I am Deepak Podili Devendra</h1>
                </div>
                <div className={'topMargin3'}>
                    <Avatar />
                </div>
                <p className={'topMargin3'}>
                    Hello my name is Deepak Podili Devendra from Bangalore, India, I am a Full-stack developer with keen interest in solving real world problems. I have a diverse set of skills ranging from HTML, CSS, Javascript, ReactJS all the way to NodeJS, MYSQL. I like to stay updated on the latest trends in the IT industry.
                </p>
            </div>
        </Layout>
    )
}

export default About;
