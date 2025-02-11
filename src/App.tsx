import { useState } from 'react';
import WebSocketConnection from './Components/WebSocket';
import DataVisualizer from './Components/DataVisualization';

function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const handleDataReceived = (newData) => {
    setData((prevData) => [...prevData, ...newData]);
    setLoading(false);
  };

  const handleError = (errMessage) => {
    setError(errMessage);
    setLoading(false);
  };

  return (
    <div className="App">
      <h1>Real-Time WebSocket Data</h1>
      {loading && <p>Loading data...</p>}
      {error && <p style={{ color: 'red' }}>Error: {error}</p>}
      <WebSocketConnection onDataReceived={handleDataReceived} onError={handleError} />
      <DataVisualizer data={data} />
    </div>
  );
}

export default App;
