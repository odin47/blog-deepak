import Link from 'next/link';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import styles from './SideNav.module.scss';

const SideNav = ({isOpen, handleClose}) => {
	return (
		isOpen &&
			<div className={styles.container}>
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
