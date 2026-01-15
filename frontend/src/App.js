
import { useState } from 'react';
import Login from './Login';

export default function App() {
  const [token, setToken] = useState(null);

  if (!token) return <Login setToken={setToken} />;

  return (
    <div style={{ maxWidth: 600, margin: '40px auto' }}>
      <h1>📋 Task Dashboard</h1>
      <div style={{ padding: 15, border: '1px solid #ddd', borderRadius: 10 }}>
        <h3>Finish Activity 7</h3>
        <p>Status: Pending</p>
        <p>Deadline: 2026-01-20</p>
      </div>
    </div>
  );
}
