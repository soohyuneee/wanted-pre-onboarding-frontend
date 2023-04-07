import {useState} from 'react';
import API from '../modules/API';
import {TODO_URL} from '../modules/url';

function TodoItem({todos, setTodos, item, user}) {
	const [edit, setEdit] = useState(false);
	const [value, setValue] = useState(item.todo);

	const config = {
		headers: {
			Authorization: `Bearer ${user}`,
		},
	};

	const onChange = (id, todo) => async (e) => {
		const isCompleted = e.target.checked;
		try {
			const res = await API.put(`${TODO_URL}/${id}`, {todo, isCompleted}, config);
			const updatedTodo = res.data;
			const updatedTodos = todos.map((todo) => (todo.id === updatedTodo.id ? updatedTodo : todo));
			setTodos(updatedTodos);
		} catch (err) {
			console.log(err.response.data.message);
		}
	};

	const onDelete = async (id) => {
		try {
			await API.delete(`${TODO_URL}/${id}`, config);
			const newTodos = todos.filter((todo) => todo.id !== id);
			setTodos(newTodos);
		} catch (err) {
			console.log(err.response.data.message);
		}
	};

	const onCancle = () => {
		setEdit(false);
		setValue(item.todo);
	};

	const onEdit = async (id, todo, isCompleted) => {
		try {
			const res = await API.put(`${TODO_URL}/${id}`, {todo, isCompleted}, config);
			const updatedTodo = res.data;
			const updatedTodos = todos.map((todo) => (todo.id === updatedTodo.id ? updatedTodo : todo));
			setTodos(updatedTodos);
			setEdit(false);
		} catch (err) {
			console.log(err.response.data.message);
		}
	};

	return (
		<li>
			<label>
				<input type="checkbox" checked={item.isCompleted} onChange={onChange(item.id, item.todo)} />
				{edit ? (
					<>
						<input data-testid="modify-input" value={value} onChange={(e) => setValue(e.target.value)} />
						<button data-testid="submit-button" onClick={() => onEdit(item.id, value, item.isCompleted)}>
							제출
						</button>
						<button data-testid="cancel-button" onClick={onCancle}>
							취소
						</button>
					</>
				) : (
					<>
						<span>{item.todo}</span>
						<button data-testid="modify-button" onClick={() => setEdit(true)}>
							수정
						</button>
						<button data-testid="delete-button" onClick={() => onDelete(item.id)}>
							삭제
						</button>
					</>
				)}
			</label>
		</li>
	);
}

export default TodoItem;
