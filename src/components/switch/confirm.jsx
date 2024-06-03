import './css/confirm.css'
import { useState } from 'react';



export function EmailAccess() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="email-access-page">
      <h1>{submitted ? 'Wait for access to be granted' : 'Enter your email to gain access'}</h1>
      {!submitted && (
        <form onSubmit={handleSubmit} className="email-form">
          <input 
            type="email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            placeholder="Enter your email"
            className="email-input"
            required
          />
          <button type="submit" className="submit-button">Send</button>
        </form>
      )}
    </div>
  );
}
