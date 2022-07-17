import React from "react";

const Profile =({
    onSubmit,
    src
  })=> { 
    return (
    <div className="card">
      <form onSubmit={onSubmit}>
        <h1>Profile Card</h1>
        <label className="custom-file-upload fas">
          <div className="img-wrap" >
            <img for="photo-upload" src={src}/>
          </div>
        </label>
      </form>
    </div>
    )
}

export default Profile;
    