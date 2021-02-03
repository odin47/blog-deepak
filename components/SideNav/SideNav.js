import {useEffect, useState} from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import useInnerWidth from 'hooks/useInnerWidth';
import styles from './SideNav.module.scss';

const SideNav = ({isOpen, handleClose}) => {

	const [state, setState] = useState(false);
	const windowSize = useInnerWidth();
	useEffect(() => {
		if(windowSize.width >= 768) {
			setState(true);
		} else {
			setState(false);
		}
	},[windowSize]);

	return (
		(isOpen || state) &&
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
