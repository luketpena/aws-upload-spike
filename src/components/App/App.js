import React from 'react';
import Axios from 'axios';

import ImageUpload from '../ImageUpload/ImageUpload';

export default function App() {

  function triggerAxios() {
    Axios.get('/api/aws');
  }

  return (
    <div className="App">
      <ImageUpload />
    </div>
  );
}