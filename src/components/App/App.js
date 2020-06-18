import React from 'react';
import Axios from 'axios';

import MyUpload from '../MyUpload/MyUpload';

export default function App() {

  function triggerAxios() {
    Axios.get('/api/aws');
  }

  return (
    <div className="App">
      <MyUpload />
    </div>
  );
}