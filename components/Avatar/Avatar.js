import Image from 'next/image';
import styles from './Avatar.module.scss';
export default function Avatar() {
	return (
		<div className={styles.container}>
			<Image
				className={styles.avatarContainer}
				src="/images/avatar.JPG"
				alt="Avatar"
				width={200}
				height={200}
			/>
		</div>
	);
}
