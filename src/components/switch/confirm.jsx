import "./css/confirm.css";
import { useState } from "react";
import { auth } from "../../api";

export function EmailAccess() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [token, setToken] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitted(true);

    try {
      const response = await auth({ email });
      const token = response.data.token;
      setToken(token);
      console.log(`Token received: ${token}`);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="email-access-page">
      <h1>
        {submitted
          ? "Wait for access to be granted"
          : "Enter your email to gain access"}
      </h1>
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
          <button type="submit" className="submit-button">
            Send
          </button>
        </form>
      )}
    </div>
  );
}
