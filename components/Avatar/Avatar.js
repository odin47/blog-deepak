import Image from 'next/image';
import styles from './Avatar.module.scss';
export default function Avatar() {
	return (
		<div className={styles.container}>
			<Image
				className={styles.avatarContainer}
				src="/images/avatar.JPG"
				alt="Avatar"
				width={500}
				height={500}
			/>
		</div>
	);
}
