import React, { useState } from 'react';
import { FaTrashAlt } from 'react-icons/fa';
import styles from './Todo.module.css';

export default function Todo({ todo, onUpdate, onDelete }) {
	const { text, status } = todo;
	const handleChange = (e) => {
		const status = e.target.checked ? 'completed' : 'active';
		onUpdate({ ...todo, status });
	};
	const handleDelete = () => onDelete(todo);
	return (
		<li className={styles.todo} key={todo.id}>
			<input
				className={styles.checkbox}
				type='checkbox'
				id={todo.id}
				checked={status === 'completed'}
				onChange={handleChange}
			/>
			<label htmlFor={todo.id} className={styles.text}>
				{text}
			</label>
			<span className={styles.icon}>
				<button onClick={handleDelete}>
					<FaTrashAlt />
				</button>
			</span>
		</li>
	);
}
