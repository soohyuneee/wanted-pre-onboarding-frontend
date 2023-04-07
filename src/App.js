import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {SIGNUP, SIGNIN, TODO} from './modules/routes';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import Todo from './components/Todo';
import GlobalStyle from './components/style/GlobalStyle';

function App() {
	return (
		<BrowserRouter>
			<GlobalStyle />
			<Routes>
				<Route path={SIGNUP} element={<SignUp />} />
				<Route path={SIGNIN} element={<SignIn />} />
				<Route index element={<Todo />} />
				<Route path={TODO} element={<Todo />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
