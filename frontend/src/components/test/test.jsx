import React from 'react'


const Test = () => {
  return (
    <div>
      <form action='/upload' method='POST' enctype = "multipart/form-data">
        <input type='file' name='userResume'/>
        <button type='submit'>Upload</button>
      </form>
    </div>
  )
}

export default Test
