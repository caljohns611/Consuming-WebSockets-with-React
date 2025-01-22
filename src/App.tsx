import React, { useEffect, useState } from 'react';
import { connectWebSocket, disconnectWebSocket } from './Components/WebSocket';
import DataVisualizer from './Components/DataVisualization';

function App() {
  const [data, setData] = useState(null);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const handleData = (receivedData) => {
      if (!isPaused) {
        setData(receivedData);
      }
    };

    connectWebSocket(handleData);

    return () => {
      disconnectWebSocket();
    };
  }, [isPaused]);

  return (
    <div className="App">
      <h1>Real-Time Data Visualization</h1>
      {data ? (
        <DataVisualizer data={data} />
      ) : (
        <p>Loading data...</p>
      )}
      <button onClick={() => setIsPaused(!isPaused)}>
        {isPaused ? 'Resume Updates' : 'Pause Updates'}
      </button>
    </div>
  );
}

export default App;