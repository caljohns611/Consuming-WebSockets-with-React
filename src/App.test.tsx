import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import useWebSocket from './Components/WebSocket';

const App = () => {
  const { data, error, isConnected, togglepause } = useWebSocket('')
}