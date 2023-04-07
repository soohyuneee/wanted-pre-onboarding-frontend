import {useState, useEffect} from 'react';

function useEmail(value) {
	const [validEmailText, setValidEmailText] = useState('');
	const [isValidEmail, setIsValidEmail] = useState(false);

	useEffect(() => {
		const regex = /@/;
		if (value.length) {
			if (!regex.test(value)) {
				setValidEmailText('올바른 이메일을 입력해주세요.');
				setIsValidEmail(true);
			} else {
				setValidEmailText('');
				setIsValidEmail(false);
			}
		}
	}, [value]);

	return {validEmailText, isValidEmail};
}

export default useEmail;
