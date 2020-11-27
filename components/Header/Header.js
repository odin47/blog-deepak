import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './Header.module.scss';

export default function Header() {
	return (
		<header className={styles.container}>
			<div className={styles.leftContainer}>
				<span>💾</span>
				<span>Blog</span>
			</div>
			<div className={styles.rightContainer}>
				<FontAwesomeIcon icon="bars" />
			</div>
		</header>
	);
}
