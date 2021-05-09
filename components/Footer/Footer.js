import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faLinkedin, faGithub, faDev } from '@fortawesome/free-brands-svg-icons';
import styles from './Footer.module.scss';

export default function Footer({developerName, twitter, linkedin, github, dev}) {
	return (
		<footer className={styles.container}>
			<div className={styles.childContainer}>
				<div className={styles.leftChildContainer}>
					<p>Designed and Developed with ❤️ by {developerName}</p>
				</div>
				<div className={styles.rightChildContainer}>
					<a href={twitter}>
						<FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon>
					</a>
					<a href={linkedin}>
						<FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon>
					</a>
					<a href={github}>
						<FontAwesomeIcon icon={faGithub}></FontAwesomeIcon>
					</a>
					<a href={dev}>
						<FontAwesomeIcon icon={faDev}></FontAwesomeIcon>
					</a>
				</div>
			</div>
		</footer>
	);
}
