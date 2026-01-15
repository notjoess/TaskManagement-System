
import { useState } from 'react';
import axios from 'axios';

export default function Login({ setToken }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const login = async () => {
    const res = await axios.post('http://localhost:3001/auth/login', {
      email, password
    });
    setToken(res.data.token);
  };

  return (
    <div style={{ width: 300, margin: '100px auto', textAlign: 'center' }}>
      <h2>Login</h2>
      <input placeholder="Email" onChange={e => setEmail(e.target.value)} /><br/>
      <input type="password" placeholder="Password" onChange={e => setPassword(e.target.value)} /><br/>
      <button onClick={login}>Login</button>
    </div>
  );
}
