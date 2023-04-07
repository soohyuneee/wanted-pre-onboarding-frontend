import {useState, useEffect} from 'react';

function usePassword(value) {
	const [validPasswordText, setValidPasswordText] = useState('');
	const [isValidPassword, setIsValidPassword] = useState(false);

	useEffect(() => {
		if (value.length) {
			if (value.length < 8) {
				setValidPasswordText('8자 이상 입력해주세요.');
				setIsValidPassword(true);
			} else {
				setValidPasswordText('');
				setIsValidPassword(false);
			}
		}
	}, [value]);

	return {validPasswordText, isValidPassword};
}

export default usePassword;
