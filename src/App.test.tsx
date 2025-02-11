import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import useWebSocket from './Hook/useWebSocket';

const App = () => {
  const { data, error, isConnected, togglepause } = useWebSocket('')
}