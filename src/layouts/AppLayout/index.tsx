import { Header } from '@/components/Header';
import { Outlet } from 'react-router-dom';

import styles from './styles.module.css';

export function AppLayout() {
	return (
		<main className={styles['app-layout']}>
			<Header />
			<Outlet />
		</main>
	);
}
