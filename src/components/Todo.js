import {useEffect, useState} from 'react';
import {Navigate} from 'react-router-dom';
import {SIGNIN} from '../modules/routes';
import API from '../modules/API';
import {TODO_URL} from '../modules/url';
import TodoItem from './TodoItem';
import * as S from './style/TodoStyle';

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
		API.get(TODO_URL, config).then((res) => {
			setTodos(res.data);
		});
	}, []);

	const onCreate = async () => {
		try {
			const res = await API.post(TODO_URL, {todo}, config);
			setTodos([...todos, res.data]);
			setTodo('');
		} catch (err) {
			console.log(err.response.data.message);
		}
	};

	const onLogout = () => {
		localStorage.clear();
		window.location.reload();
	};

	return (
		<S.BgColor>
			<S.Container>
				<button onClick={onLogout}>로그아웃</button>
				<h2>My Todos</h2>
				<div>
					<S.NomalInput data-testid="new-todo-input" type="text" onChange={(e) => setTodo(e.target.value)} value={todo} />
					<button data-testid="new-todo-add-button" onClick={onCreate}>
						추가
					</button>
				</div>
				{todos.map((item) => {
					return <TodoItem key={item.id} todos={todos} setTodos={setTodos} item={item} user={user} />;
				})}
				{!user && <Navigate to={SIGNIN} replace={true} />}
			</S.Container>
		</S.BgColor>
	);
}

export default Todo;
