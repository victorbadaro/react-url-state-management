import { ElementRef, FormEvent, useEffect, useRef, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { User } from './types';

import styles from './styles.module.css';

export function Users() {
	const [users, setUsers] = useState<User[]>([]);
	const [searchParams, setSearchParams] = useSearchParams({ name: '' });
	const name = searchParams.get('name') ?? '';
	const nameInput = useRef<ElementRef<'input'>>(null);

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

		setSearchParams(prev => {
			prev.set('name', nameInput.current?.value ?? '');
			return prev;
		}, { replace: true });
	}

	return (
		<div className={styles['users-container']}>
			<h1>Users</h1>
			<form onSubmit={handleFormSubmit}>
				<input
					ref={nameInput}
					type="text"
					placeholder="Name"
					defaultValue={name}
				/>
				<button type="submit">search</button>
			</form>
			<ul>
				{filteredUsers.map(user => <li key={user.id}>{user.id} - {user.name}</li>)}
			</ul>
		</div>
	);
}
