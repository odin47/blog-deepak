import {useEffect, useState} from 'react';
import Link from 'next/link';
import {useRouter} from 'next/router';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import windowResize from 'hooks/windowResize';
import styles from './SideNav.module.scss';

const SideNav = ({isOpen, handleClose}) => {

	const [state, setState] = useState(false);
	const windowSize = windowResize();
	const router = useRouter();

	useEffect(() => {
		if(windowSize.width >= 768) {
			setState(true);
		} else {
			setState(false);
		}
	},[windowSize]);

	return (
		<>
		{
			isOpen && !state &&
				<div className={styles.floatingContainer}>
					<ul>
						<li onClick={() => handleClose(false)}>
							<FontAwesomeIcon icon={faTimes} />
						</li>
						<li><Link href={'/'}>Home</Link></li>
						<li><Link href={'/blog'}>Blog</Link></li>
						<li><Link href={'/coffee'}>Coffee</Link></li>
						<li><Link href={'/about'}>About</Link></li>
					</ul>
				</div>
		}
		{
			state &&
				<div className={styles.normalContainer}>
					<ul>
						<li className={router.pathname === '/' ? 'textUnderline' : ''}><Link href={'/'}>Home</Link></li>
						<li className={router.pathname === '/blog' ? 'textUnderline' : ''}><Link href={'/blog'}>Blog</Link></li>
						<li className={router.pathname === '/resume.pdf' ? 'textUnderline' : ''}><Link href={'https://www.notion.so/Deepak-Podili-Devendra-2eb43bf2532e4749a72147450a7942ba'}>CV</Link></li>
						<li className={router.pathname === '/about' ? 'textUnderline' : ''}><Link href={'/about'}>About</Link></li>
					</ul>
				</div>
		}
		</>
	)
};

SideNav.propTypes = {
	isOpen: PropTypes.bool,
	handleClose: PropTypes.func.isRequired
};

SideNav.defaultProps = {
	isOpen: false
};

export default SideNav;
