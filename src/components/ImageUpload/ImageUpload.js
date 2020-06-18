import React, {useRef, useEffect} from 'react';

export default function ImageUpload({value}) {

  const inputRef = useRef();

  function handleInputChange() {
    const files = document.getElementById('file-input').files;
    const file = files[0];
    if (file==null) {
      return alert('No file selected.');
    }
    getSignedRequest(file);
  }

  function getSignedRequest(file) {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', `/sign-s3?file-name=${file.name}&file-type=${file.type}`);
    xhr.onreadstatechange = () => {
      if (xhr.readState===4) {
        if (xhr.status===200) {
          const response = JSON.parse(xhr.responseText);
          uploadFile(file, response.signedRequest,response.url);
        } else {
          alert('Could not get signed URL.');
        }
      }
    };
    xhr.send();
  }

  function uploadFile(file, signedRequest, url) {
    const xhr = new XMLHttpRequest();
    xhr.open('PUT',signedRequest);
    xhr.onreadystatechange = () => {
      if (xhr.readState===4) {
        if (xhr.status===200) {
          document.getElementById('preview').src = url;
          document.getElementById('avatar-url').value = url;
          console.log('Successful upload!');
          
        } else {
          alert('Could not upload file');
        }
      }
    }
    xhr.send(file);
  }


  return (
    <section>
      <input type="file" id="file-input" onChange={handleInputChange}/>
      <p id="status">{value || "Please select a file"}</p>
      <img id="preview" src="/images/default.png"/>

      <form method="POST" action="/save-details">
        <input type="hidden" id="avatar-url" name="avatar-url" value="/images/default.png"/>
        <input type="text" name="username" placeholder="Username"/><br/>
        <input type="text" name="full-name" placeholder="Full name"/><br/><br/>
        <input type="submit" value="Update profile"/>
      </form>
    </section>
  )
}