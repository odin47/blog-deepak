import { useState } from 'react';
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
				<span>💾</span>
				<span>Blog</span>
			</div>
			<div className={styles.rightContainer}>
				<FontAwesomeIcon className={styles.menuIcon} icon="bars" onClick={() => handleSideBar(true)}/>
				<SideNav isOpen={state} handleClose={handleSideBar}/>
			</div>
		</header>
	);
}
