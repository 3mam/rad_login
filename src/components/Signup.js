import React, { useState } from 'react';
import UserPool from '../UserPool';

function Signup() {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');


	const onSubmit = event => {
		event.preventDefault();
		UserPool.signUp(email, password, [], null, (error, data) => {
			if (error)
				console.error(error);
			else
				console.log(data);
		});
	}

	return (
		<div>
			<form onSubmit={onSubmit}>
				<input value={email} onChange={event => setEmail(event.target.value)} />
				<input value={password} onChange={event => setPassword(event.target.value)} />
				<button type='submit'>Signup</button>
			</form>
		</div>
	);
}

export default Signup;