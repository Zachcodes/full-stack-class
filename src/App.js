import React from 'react';
import routes from './routes';
import Header from './components/Header';
import './App.css';

function App() {
  return (
    <div>
      <Header />
      {routes}
    </div>
  );
}

export default App;
