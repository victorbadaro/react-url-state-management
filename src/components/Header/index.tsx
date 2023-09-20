import styles from './styles.module.css';

export function Header() {
	return (
		<header className={styles.header}>
			<nav>
				<a>Home</a>
				<a>Users</a>
			</nav>
		</header>
	);
}
