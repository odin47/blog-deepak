import { library } from '@fortawesome/fontawesome-svg-core';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';
import Header from 'components/Header';
import styles from './Layout.module.scss';

library.add(faBars);

const Layout = ({ children }) => {
	return (
		<div className={styles.container}>
			<Header />
			{children}
		</div>
	);
};

Layout.propTypes = {
	children: PropTypes.element,
};

export default Layout;
