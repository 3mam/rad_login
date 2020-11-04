import './App.css';
import Signup from './components/Signup';
import Login from './components/Login';
import GoogleLogin from 'react-google-login';

const responseGoogle = (response) => {
  console.log(response);
}

function App() {
  return (
    <div>
      <Signup />
      <Login />
      <GoogleLogin
        clientId='775740881908-ckb5ts986vj0oirjnt97pbvffkd38kbt.apps.googleusercontent.com'
        buttonText='Login'
        // redirectUri='https://radlogintest.auth.us-east-1.amazoncognito.com'
        redirectUri='http://localhost:3000'
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        jsSrc='https://apis.google.com/js/api.js'
        cookiePolicy={'single_host_origin'}
      />
    </div>
  );
}

export default App;
