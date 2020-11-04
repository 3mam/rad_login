import './App.css';
import Signup from './components/Signup';
import Login from './components/Login';
import GoogleLogin from 'react-google-login';
import ClientOAuth2 from 'client-oauth2';

const responseGoogle = (response) => {
  console.log(response);
}

const githubAuth = new ClientOAuth2({
  clientId: '775740881908-ckb5ts986vj0oirjnt97pbvffkd38kbt.apps.googleusercontent.com',
  clientSecret: '60buzOqZoLf_-iJ5OU9YBCD1',
  accessTokenUri: 'https://github.com/login/oauth/access_token',
  authorizationUri: 'https://github.com/login/oauth/authorize',
  redirectUri: 'http://example.com/auth/github/callback',
  scopes: ['notifications', 'gist']
})

function App() {
  return (
    <div>
      <Signup />
      <Login />
      <GoogleLogin
        clientId='775740881908-ckb5ts986vj0oirjnt97pbvffkd38kbt.apps.googleusercontent.com'
        buttonText='Login'
        // redirectUri='https://radlogintest.auth.us-east-1.amazoncognito.com'
        redirectUri='https://master.d2cr7cpf618mgh.amplifyapp.com '
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        jsSrc='https://apis.google.com/js/api.js'
        cookiePolicy={'single_host_origin'}
      />
      <div class="g-signin2" data-onsuccess="onSignIn"></div>
    </div>
  );
}

export default App;
