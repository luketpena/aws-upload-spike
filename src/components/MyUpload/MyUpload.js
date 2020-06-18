import React, {useRef, useState} from 'react';
import Axios from 'axios';

export default function MyUpload() {

  const inputRef = useRef();

  function handleInputChange(event) {
    var files = event.target.files || event.dataTransfer.files;
    if (!files.length) {
      return;
    }
  
    var formData = new FormData();
  
    // Add the File object to the formdata
    formData.append("file", files[0]);

    console.log('FormData:',files[0]);
    
  
    // Add your data...
    //formData.append("data", myData);
    uploadDocument(formData);
  }


  function uploadDocument(file) {
    Axios.post('/api/aws/upload', file, {
      responseType: 'arraybuffer',
      headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/pdf'
      }
    }).then(response=>{
      console.log('Response:',response);
      
    })
  }


  return (
    <div>
      <h1>Uploader!</h1>

      <input type="file" id="file-select" ref={inputRef} onChange={e=>handleInputChange(e)}/>

    </div>
  )
}