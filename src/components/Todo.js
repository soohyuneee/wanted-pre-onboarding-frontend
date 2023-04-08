import {useEffect, useState} from 'react';
import {Navigate} from 'react-router-dom';
import {SIGNIN} from '../modules/routes';
import API from '../modules/API';
import {TODO_URL} from '../modules/url';
import TodoItem from './TodoItem';
import * as S from './style/TodoStyle';
import {MdOutlineAdd} from 'react-icons/md';

function Todo() {
	const [todo, setTodo] = useState('');
	const [todos, setTodos] = useState([]);

	const user = localStorage.getItem('access_token');
	const config = {
		headers: {
			Authorization: `Bearer ${user}`,
		},
	};

	useEffect(() => {
		if (user) {
			API.get(TODO_URL, config).then((res) => {
				setTodos(res.data);
			});
		}
	}, []);

	const onCreate = async () => {
		try {
			const res = await API.post(TODO_URL, {todo}, config);
			setTodos([...todos, res.data]);
			setTodo('');
		} catch (err) {
			alert(err.response.data.message);
		}
	};

	const onLogout = () => {
		localStorage.clear();
		window.location.reload();
	};

	return (
		<S.BgColor>
			<S.Container>
				<S.LogoutBtn>
					<S.Btn onClick={onLogout}>Logout</S.Btn>
				</S.LogoutBtn>
				<S.Title>My Todos</S.Title>
				<S.AddContainer>
					<S.NomalInput data-testid="new-todo-input" type="text" onChange={(e) => setTodo(e.target.value)} value={todo} />
					<div>
						<S.IconBtn data-testid="new-todo-add-button" onClick={onCreate}>
							<MdOutlineAdd className="icon" />
						</S.IconBtn>
					</div>
				</S.AddContainer>
				<S.TodoList>
					{todos.map((item) => {
						return <TodoItem key={item.id} todos={todos} setTodos={setTodos} item={item} user={user} />;
					})}
					{!user && <Navigate to={SIGNIN} replace={true} />}
				</S.TodoList>
			</S.Container>
		</S.BgColor>
	);
}

export default Todo;
