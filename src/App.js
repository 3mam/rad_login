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
        clientId='725426102702-8bg4g2as1lf4itmb3gvl6q58hth9lkjj.apps.googleusercontent.com'
        buttonText='Login'
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy={'single_host_origin'}
      />
    </div>
  );
}

export default App;
