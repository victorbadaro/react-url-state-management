import { FormEvent, useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { User } from './types';

import styles from './styles.module.css';

export function Users() {
	const [users, setUsers] = useState<User[]>([]);
	const [searchParams, setSearchParams] = useSearchParams({ name: '' });
	const name = searchParams.get('name') ?? '';

	useEffect(() => {
		(async function () {
			const response = await fetch('http://localhost:3000/users');
			const data = await response.json();

			setUsers(data);
		})();
	}, []);

	const filteredUsers = users.filter(user => user.name.toLowerCase().includes(name.toLowerCase()));

	function handleFormSubmit(event: FormEvent) {
		event.preventDefault();
	}

	return (
		<div className={styles['users-container']}>
			<h1>Users</h1>
			<form onSubmit={handleFormSubmit}>
				<input
					type="text"
					placeholder="Name"
					value={name}
					onChange={event => setSearchParams(prev => {
						prev.set('name', event.target.value);
						return prev;
					}, { replace: true })}
				/>
				<button type="submit">search</button>
			</form>
			<ul>
				{filteredUsers.map(user => <li key={user.id}>{user.id} - {user.name}</li>)}
			</ul>
		</div>
	);
}
