import Avatar from 'components/Avatar';
import styles from './Intro.module.scss';

export default function Intro() {
	return (
		<div className={styles.container}>
			<div className={styles.childContainer}>
				<div className={styles.avatar}>
					<Avatar />
				</div>
				<div className={styles.intro}>
					<p className={styles.greetings}>Hello! I'm Deepak PD</p>
					<p className={styles.shortIntro}>
						I am a Full-stack developer with keen interest in solving
						real world problems. I have a diverse set of skills ranging
						from HTML, CSS, Javascript, ReactJS all the way to NodeJS,
						MYSQL. I like to stay updated on the latest trends in the IT
						industry.
					</p>
				</div>
			</div>
		</div>
	);
}
