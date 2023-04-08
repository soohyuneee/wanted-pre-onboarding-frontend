import {useState} from 'react';
import useEmail from '../hooks/useEmail';
import usePassword from '../hooks/usePassword';
import API from '../modules/API';
import {SIGNUP_URL} from '../modules/url';
import {useNavigate, Navigate} from 'react-router-dom';
import {SIGNIN, TODO} from '../modules/routes';
import * as S from './style/FormStyle';

function SignUp() {
	const navigate = useNavigate();
	const [value, setValue] = useState({
		email: '',
		password: '',
	});

	const {email, password} = value;
	const {validEmailText, isValidEmail} = useEmail(email);
	const {validPasswordText, isValidPassword} = usePassword(password);
	const user = localStorage.getItem('access_token');

	const onChange = (e) => {
		const changeValue = {
			...value,
			[e.target.name]: e.target.value,
		};
		setValue(changeValue);
	};

	const onSubmit = async (e) => {
		e.preventDefault();
		try {
			await API.post(SIGNUP_URL, {
				email,
				password,
			});
			navigate(SIGNIN);
		} catch (err) {
			alert(err.response.data.message);
		}
	};

	return (
		<S.BgColor>
			<S.Container>
				<S.Border>
					<S.FormWrapper>
						<S.Logo>SignUp</S.Logo>
						<S.Form>
							<S.LabelContainer>
								<S.Label>이메일</S.Label>
							</S.LabelContainer>
							<S.Input
								type="email"
								data-testid="email-input"
								name="email"
								value={email}
								onChange={onChange}
								valid={!isValidEmail}
								placeholder="이메일을 입력해주세요."
							/>
							<S.ValidText>{validEmailText}</S.ValidText>
							<S.LabelContainer>
								<S.Label>비밀번호</S.Label>
							</S.LabelContainer>
							<S.Input
								data-testid="password-input"
								type="password"
								name="password"
								value={password}
								onChange={onChange}
								valid={!isValidPassword}
								placeholder="비밀번호를 입력해주세요."
							/>
							<S.ValidText>{validPasswordText}</S.ValidText>
							<S.Button
								data-testid="signup-button"
								onClick={onSubmit}
								disabled={!(email.length && password.length) || isValidEmail || isValidPassword}
							>
								<S.ButtonText>회원가입</S.ButtonText>
							</S.Button>
							{user && <Navigate to={TODO} replace={true} />}
						</S.Form>
					</S.FormWrapper>
				</S.Border>
			</S.Container>
		</S.BgColor>
	);
}

export default SignUp;
