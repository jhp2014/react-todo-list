import React, { useState } from 'react';
import AddTodo from '../AddTodo/AddTodo';
import Todo from '../Todo/Todo';
import styles from './TodoList.module.css';
import { useEffect } from 'react';

export default function TodoList({ filter }) {
	//콜백함수로 수정하면 useState는 초기값이 필요한 경우에만 함수를 호출하게 된다.
	const [todos, setTodos] = useState(() => readTodosFromLocalStorage());

	useEffect(() => {
		localStorage.setItem('todos', JSON.stringify(todos));
	}, [todos]);

	const handleAdd = (item) => {
		setTodos([...todos, item]);
	};

	const handleUpdate = (updated) =>
		setTodos(todos.map((t) => (t.id === updated.id ? updated : t)));
	const handleDelete = (deleted) =>
		setTodos(todos.filter((t) => t.id !== deleted.id));

	const filtered = getFilteredItems(todos, filter);
	return (
		<section className={styles.container}>
			<ul className={styles.list}>
				{filtered.map((item) => (
					<Todo
						key={item.id}
						todo={item}
						onUpdate={handleUpdate}
						onDelete={handleDelete}
					/>
				))}
			</ul>
			<AddTodo onAdd={handleAdd} />
		</section>
	);
}

function readTodosFromLocalStorage() {
	const todos = localStorage.getItem('todos');
	return todos ? JSON.parse(todos) : [];
}

function getFilteredItems(todos, filter) {
	if (filter === 'all') {
		return todos;
	}
	return todos.filter((todo) => todo.status === filter);
}
