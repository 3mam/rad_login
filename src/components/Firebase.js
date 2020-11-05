import React, { useState, useEffect } from 'react';

import firebase from 'firebase/app';
import 'firebase/auth';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
// Styles
import styles from '../App.css'; // This uses CSS modules.
import '../firebaseui-styling.global.css'; // Import globally.

// Get the Firebase config from the auto generated file.
var firebaseConfig = {
	apiKey: "AIzaSyDcsv1_0P8LtahqFQNUDxFQf1w1yVD5yH8",
	authDomain: "testapp-294622.firebaseapp.com",
	databaseURL: "https://testapp-294622.firebaseio.com",
	projectId: "testapp-294622",
	storageBucket: "testapp-294622.appspot.com",
	messagingSenderId: "725426102702",
	appId: "1:725426102702:web:e947a77ebd5e023b8ca83f",
	measurementId: "G-9GJD3DVG5N"
};
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const uiConfig = {
	signInFlow: 'popup',
	signInOptions: [
		firebase.auth.GoogleAuthProvider.PROVIDER_ID,
		firebase.auth.EmailAuthProvider.PROVIDER_ID,
	],
	callbacks: {
	},
};

function Firebase() {
	const [isSignedIn, setIsSignedIn] = useState(false);
	const [userId, setUserId] = useState('null');
	const [userEmail, setUserEmail] = useState('null');
	const [userToken, setUserToken] = useState('null');

	uiConfig.callbacks = {
		signInSuccessWithAuthResult: (authResult) => {
			console.log(authResult);
			setUserId(firebaseApp.auth().currentUser.uid);
			firebaseApp.auth().currentUser.getIdToken().then((token) => setUserToken(token));
			setUserEmail(firebaseApp.auth().currentUser.email);
		},

	}

	useEffect(() => {
		firebaseApp.auth().onAuthStateChanged((user) => setIsSignedIn(!!user));
	});

	return (
		<div className={styles.container}>
			{!isSignedIn &&
				<div>
					<StyledFirebaseAuth className={styles.firebaseUi} uiConfig={uiConfig}
						firebaseAuth={firebaseApp.auth()} />
				</div>
			}
			{isSignedIn &&
				<div className={styles.signedIn}>
					Hello {firebaseApp.auth().currentUser.displayName}. You are now signed In!
						<br />
					<a className={styles.button} onClick={() => firebaseApp.auth().signOut()}>Sign-out</a>
				</div>
			}

			<b>id:</b>{userId}
			<br />
			<b>email:</b>{userEmail}
			<br />
			<b>token:</b>{userToken}
		</div>

	);
}

export default Firebase