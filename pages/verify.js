import {useState, useEffect} from 'react';
import {useRouter} from 'next/router';
import Image from 'next/image';
import Layout from 'components/Layout';
import {verifyEmail} from 'adapters/email';


const Verify = () => {
	const router = useRouter();
	const [state, setState] = useState("loading");
	useEffect(() => {
		verifyEmail(router.query).then(res => setState(res)).catch(err => setState(res))
	}, [router]);
	return (
		<Layout>
			<div className={'height-100-vh flexCenter'}>
				<div className={'vcenter'}>
					{
						state === 'loading' && <h1>Loading...</h1>
					}
					{
						state !== 'loading' &&
						<>
							<h1>{state === 'success' ? 'Email verification successful!' : 'Verification of email failed!'}</h1>
							<Image
								src={`/images/${state === 'success' ? 'verify_email.svg' : 'failure_email.svg'}`}
								alt={`${state === 'success' ? 'Success image' : 'Failure image'}`}
								width={200}
								height={200}
							/>
						</>
					}
					</div>
			</div>
		</Layout>
	)
}

export default Verify;