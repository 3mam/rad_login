import React, { useState } from 'react';
import { CognitoUser, AuthenticationDetails } from 'amazon-cognito-identity-js';
import UserPool from '../UserPool';

function Login() {
	const [email, setEmail] = useState('foo@foo.com');
	const [password, setPassword] = useState('qwe123');

	const [userId, setUserId] = useState('null');
	const [userEmail, setUserEmail] = useState('null');
	const [userToken, setUserToken] = useState('null');

	const onSubmit = event => {
		event.preventDefault();
		const user = new CognitoUser({
			Username: email,
			Pool: UserPool
		});

		const authDetails = new AuthenticationDetails({
			Username: email,
			Password: password
		});

		user.authenticateUser(authDetails, {
			onSuccess: data => {
				console.log('onSuccess:', data);
				setUserId(data.idToken.payload['cognito:username']);
				setUserToken(data.idToken.jwtToken);
				setUserEmail(data.idToken.payload.email);
			},
			onFailure: err => {
				console.error('onFailure:', err);
			},
			newPasswordRequired: data => {
				console.log('newPasswordRequired:', data);
			}
		});
	}

	return (
		<div>
			<form onSubmit={onSubmit}>
				<input value={email} onChange={event => setEmail(event.target.value)} />
				<input value={password} onChange={event => setPassword(event.target.value)} />
				<button type='submit'>Login</button>
			</form>

			<b>id:</b>{userId}
			<br />
			<b>email:</b>{userEmail}
			<br />
			<b>token:</b>{userToken}
		</div>
	);
}

export default Login;