import logo from './logo.svg';
import './App.css';
import TodoList from './TodoList/TodoList';
import { useState } from 'react';
import Header from './Header/Header';

const filters = ['all', 'active', 'completed'];
function App() {
	const [filter, setFilter] = useState(filters[0]);
	return (
		<>
			<Header filters={filters} filter={filter} onFilterChange={setFilter} />
			<TodoList filter={filter} />
		</>
	);
}

export default App;
