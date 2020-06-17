import React from 'react';

export default function ImageUpload() {
  return (
    <section>
      <input type="file" id="file-input"/>
      <p id="status">Please select a file</p>
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