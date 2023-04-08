import styled, {css} from 'styled-components';

export const BgColor = styled.div`
	background-color: #f7f7f7;
	width: 100%;
	height: 100vh;
	display: flex;
	align-items: center;
	justify-content: center;
	line-height: normal;
`;

export const Container = styled.div`
	width: 50%;
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	background-color: #fff;
`;

export const NomalInput = styled.input`
	width: 80%;
	padding: 12px;
	outline: none;
	background-color: transparent;
	border: 1px solid #e1e2e3;
	color: #666;
	border-radius: 5px;
	font-size: 16px;
	font-weight: 400;
	margin-right: 15px;
	margin-left: 20px;
	&:focus {
		border-color: #6495ed;
	}
`;

export const LogoutBtn = styled.div`
	display: flex;
	width: 90%;
	justify-content: flex-end;
	margin-top: 20px;
`;

export const Btn = styled.button`
	padding: 10px;
	border-radius: 5px;
	font-size: 16px;
	border: 1px solid #6495ed;
	background-color: transparent;
	color: #6495ed;
	&:hover {
		border: none;
		background-color: #6495ed;
		color: #fff;
	}
`;

export const Title = styled.h1`
	display: flex;
	width: 100%;
	justify-content: center;
	color: #6495ed;
`;

export const AddContainer = styled.div`
	display: flex;
	width: 100%;
	justify-content: center;
	align-items: center;
`;

export const IconBtn = styled.button`
	padding: 5px;
	border-radius: 5px;
	font-size: 16px;
	border: none;
	background-color: transparent;
	.icon {
		color: #888;
		font-size: 2em;
		&:hover {
			color: #6495ed;
		}
	}
	.edit {
		color: #888;
		font-size: 1.5em;
		&:hover {
			color: #6495ed;
		}
	}
`;

export const TodoList = styled.div`
	height: 100%;
	width: 88%;
	margin-top: 20px;
`;

export const Todo = styled.li`
	font-size: 20px;
	color: #666;
	letter-spacing: 1px;
	margin-bottom: 20px;
	margin-left: 10px;
`;

export const TodoWrapper = styled.div`
	display: flex;
	align-items: center;
	.check {
		cursor: pointer;
	}
	span {
		margin-left: 10px;
		letter-spacing: 2px;
	}
	.done {
		text-decoration-line: line-through;
		color: #ddd;
	}
`;

export const BtnWrapper = styled.div`
	margin-left: 10px;
`;

export const EditInput = styled.input`
	padding: 10px;
	outline: none;
	background-color: transparent;
	border: 1px solid #e1e2e3;
	color: #666;
	border-radius: 5px;
	font-size: 16px;
	font-weight: 400;
	margin-left: 20px;
	&:focus {
		border-color: #6495ed;
	}
`;
