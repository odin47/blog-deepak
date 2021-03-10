import { useState } from 'react';
import Link from 'next/link';
import SideNav from 'components/SideNav';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './Header.module.scss';

export default function Header() {

	const [state, setState] = useState(false);
	const handleSideBar = (value) => {
		document.body.style.overflow = !value ? 'visible' : 'hidden';
		setState(value);
	};
	return (
		<header className={styles.container}>
			<div className={styles.leftContainer}>
				<Link href={'/'}>
					<div>
						<span className={styles.blogIcon}>💾</span>
						<span className={styles.blogName}>Blog</span>
					</div>
				</Link>
			</div>
			<div className={styles.rightContainer}>
				<FontAwesomeIcon className={styles.menuIcon} icon="bars" onClick={() => handleSideBar(true)}/>
				<SideNav isOpen={state} handleClose={handleSideBar}/>
			</div>
		</header>
	);
}
