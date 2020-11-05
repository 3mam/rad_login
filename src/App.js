import './App.css';
//import Signup from './components/Signup';
import Login from './components/Login';
import { GoogleLogin, useGoogleLogin } from 'react-google-login';
import Firebase from './components/Firebase';
import React, { useState } from 'react';

function App() {

  const [userId, setUserId] = useState('null');
  const [userEmail, setUserEmail] = useState('null');
  const [userToken, setUserToken] = useState('null');

  const responseGoogle = (response) => {
    console.log(response);
    setUserId(response.googleId);
    setUserToken(response.tokenId);
    setUserEmail(response.profileObj.email);
  }


  const { signIn, loaded } = useGoogleLogin({
    clientId: '725426102702-8bg4g2as1lf4itmb3gvl6q58hth9lkjj.apps.googleusercontent.com',
    buttonText: 'Login',
    onSuccess: responseGoogle,
    onFailure: responseGoogle,
    cookiePolicy: 'single_host_origin'
  })

  return (
    <div>
      <h1>AWS Cognito</h1>
      <Login />
      <h1>Google</h1>
      <GoogleLogin
        clientId="725426102702-8bg4g2as1lf4itmb3gvl6q58hth9lkjj.apps.googleusercontent.com"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy={'single_host_origin'}
      />
      <br />
      <b>id:</b>{userId}
      <br />
      <b>email:</b>{userEmail}
      <br />
      <b>token:</b>{userToken}
      <h1>Firebase</h1>
      <Firebase />
    </div>
  );
}

export default App;
