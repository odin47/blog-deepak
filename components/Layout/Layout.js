import { library } from '@fortawesome/fontawesome-svg-core';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';
import Header from 'components/Header';
import Footer from 'components/Footer';
import styles from './Layout.module.scss';

library.add(faBars);

const Layout = ({ children }) => {
	return (
		<div className={styles.container}>
			<Header />
			<div className={styles.childContainer}>
				{children}
			</div>
			<Footer />
		</div>
	);
};

Layout.propTypes = {
	children: PropTypes.element,
};

export default Layout;
