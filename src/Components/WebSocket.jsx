import { useEffect, useState } from 'react';
import io from 'socket.io-client';

const WebSocketConnection = ({ onDataReceived }) => {
  const [isConnected, setIsConnected] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const socketUrl = 'ws://127.01:5000';

    const socket = io(socketUrl, {
      transports: ['websocket'],
      reconnectionAttempts: 5,
    });

    socket.on('connect', () => {
      setIsConnected(true);
      setIsError(false);
      console.log('Connected to WebSocket server');
    });

    socket.on('connect_error', (error) => {
      setIsError(true);
      console.error('Connection failed: ', error);
    });

    socket.on('data', (data) => {
      console.log('Received data: ', data);
      onDataReceived(data);
    });

    socket.on('disconnect', () => {
      setIsConnected(false);
      console.log('Disconnected from WebSocket server');
    });

    return () => {
      socket.disconnect();
    };
  }, [onDataReceived]);

  return (
    <div>
      {isConnected ? (
        <p>Connected to WebSocket server</p>
      ) : isError ? (
        <p style={{ color: 'red' }}>Failed to connect to WebSocket</p>
      ) : (
        <p>Connecting to WebSocket...</p>
      )}
    </div>
  );
};

export default WebSocketConnection;