import React, { useState } from 'react';

export default function AddTodo({ onAdd }) {
	const [text, setText] = useState('');
	const handleChange = (e) => setText(e.target.value);
	const handleSubmit = (e) => {
		e.preventDefault();
		if (text.trim().length === 0) {
			return;
		}
		onAdd({ id: '고유 값', text, status: 'active' });
		setText('');
	};
	return (
		<form onSubmit={handleSubmit}>
			<input
				type='text'
				placeholder='Add Todo'
				onChange={handleChange}
				value={text}
			/>
			<button>Add</button>
		</form>
	);
}
