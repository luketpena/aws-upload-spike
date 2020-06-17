import React from 'react';
import Axios from 'axios';

export default function App() {

  function triggerAxios() {
    Axios.get('/api/aws');
  }

  return (
    <div className="App">
      <h1>Hello World</h1>
      <button onClick={triggerAxios}>Trigger server!</button>
    </div>
  );
}