
import  { useState, useEffect } from 'react';
import { fetchData } from '../../api.js'; 
import './css/loading.css'; 

function LoadingPage() {
  const [loading, setLoading] = useState(true); 
  const [data, setData] = useState(null); 
  const [error, setError] = useState(null); 

  useEffect(() => {
    async function loadData() {
      try {
        const data = await fetchData();
        setData(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false); 
      }
    }
    loadData();
  }, []);

  if (loading) {
    return (
      <div className="loading-container">
        <div className="spinner"></div>
        <p>Loading...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="error-container">
        <p>Error: {error}</p>
      </div>
    );
  }

  return (
    <div className="data-container">
      <h1>Data Loaded</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}

export default LoadingPage;
