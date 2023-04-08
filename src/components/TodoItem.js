import {useState} from 'react';
import API from '../modules/API';
import {TODO_URL} from '../modules/url';
import * as S from './style/TodoStyle';
import {MdEdit, MdDelete, MdCheckCircleOutline, MdOutlineCancel} from 'react-icons/md';

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
			alert(err.response.data.message);
		}
	};

	const onDelete = async (id) => {
		try {
			await API.delete(`${TODO_URL}/${id}`, config);
			const newTodos = todos.filter((todo) => todo.id !== id);
			setTodos(newTodos);
		} catch (err) {
			alert(err.response.data.message);
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
			alert(err.response.data.message);
		}
	};

	return (
		<S.Todo>
			{edit ? (
				<S.TodoWrapper>
					<label>
						<input type="checkbox" className="check" checked={item.isCompleted} onChange={onChange(item.id, item.todo)} />
						<S.EditInput data-testid="modify-input" value={value} onChange={(e) => setValue(e.target.value)} />
					</label>
					<S.BtnWrapper>
						<S.IconBtn data-testid="submit-button" onClick={() => onEdit(item.id, value, item.isCompleted)}>
							<MdCheckCircleOutline className="edit" />
						</S.IconBtn>
						<S.IconBtn data-testid="cancel-button" onClick={onCancle}>
							<MdOutlineCancel className="edit" />
						</S.IconBtn>
					</S.BtnWrapper>
				</S.TodoWrapper>
			) : (
				<S.TodoWrapper>
					<label>
						<input type="checkbox" className="check" checked={item.isCompleted} onChange={onChange(item.id, item.todo)} />
						<span className={item.isCompleted ? 'done' : null}>{item.todo}</span>
					</label>
					<S.BtnWrapper>
						<S.IconBtn data-testid="modify-button" onClick={() => setEdit(true)}>
							<MdEdit className="edit" />
						</S.IconBtn>
						<S.IconBtn data-testid="delete-button" onClick={() => onDelete(item.id)}>
							<MdDelete className="edit" />
						</S.IconBtn>
					</S.BtnWrapper>
				</S.TodoWrapper>
			)}
		</S.Todo>
	);
}

export default TodoItem;
