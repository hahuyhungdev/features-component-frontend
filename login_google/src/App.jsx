import { useEffect, useState } from 'react';
import './App.css';
import jwt_decode from 'jwt-decode';
import { GoogleLogin, googleLogout } from '@react-oauth/google';

function App() {
  const [user, setUser] = useState();

  const handleCredentialResponse = (response) => {
    const userObjectDecode = jwt_decode(response.credential);
    console.log(userObjectDecode);
    setUser(userObjectDecode);
    document.getElementById('signInBtn').hidden = true;
  };

  function handleSignOut(e) {
    e.preventDefault();
    setUser(null);
    googleLogout();
    document.getElementById('signInBtn').hidden = false;
  }

  return (
    <div className='App'>
      <div id='signInBtn'></div>
      {user == null ? (
        <GoogleLogin
          size='medium'
          onSuccess={(credentialResponse) => handleCredentialResponse(credentialResponse)}
          onError={() => {
            console.log('Login Failed');
          }}
        />
      ) : (
        <div
          style={{
            cursor: 'pointer',
            border: '1px solid black',
            padding: '5px',
            borderRadius: '5px',
            width: '100px',
            textAlign: 'center',
          }}
          id='signOutBtn'
          onClick={handleSignOut}
        >
          Logout
        </div>
      )}
      {user && (
        <div>
          <h1>{user.name}</h1>
          <h2>{user.email}</h2>
          <img src={user.picture} alt='user' />
        </div>
      )}
    </div>
  );
}

export default App;
