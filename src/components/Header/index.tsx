import { Link } from 'react-router-dom';

import styles from './styles.module.css';

export function Header() {
	return (
		<header className={styles.header}>
			<nav>
				<Link to="home">Home</Link>
				<Link to="users">Users</Link>
			</nav>
		</header>
	);
}
