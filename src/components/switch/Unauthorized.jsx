import './css/Unauthorized.css';

export function Unauthorized() {
  return (
    <div className="unauthorized-container">
      <h1 className="error-code">401</h1>
      <p className="error-message">Доступ запрещен. У вас нет разрешения для просмотра этой страницы.</p>
    </div>
  );
}