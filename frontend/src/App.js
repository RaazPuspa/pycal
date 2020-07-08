import React from 'react';
import Header from './components/Header';
import Calculator from './components/Calculator';

const App = () => {
  return (
    <div>
      <Header />

      <div className="cal-container">
        <Calculator />
      </div>
    </div>
  );
}

export default App;
