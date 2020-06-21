import React from 'react';
import Axios from 'axios';

import MyUpload from '../MyUpload/MyUpload';

export default function App() {

  function triggerAxios() {
    Axios.get('/api/aws');
  }

  function clickDownload() {
    Axios.get('/api/aws/download');
  }

  return (
    <div className="App">
      <button onClick={clickDownload}>Download File</button>
      <MyUpload />
      
    </div>
  );
}