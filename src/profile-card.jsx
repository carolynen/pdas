import React, { useState } from "react";

function ProfileCard({ title, handle, image }) {
  const [showImage, setShowImage] = useState(false);

  const handleClick = () => {
    setShowImage(true);
  };

  return (
    <div>
      <div>
        <button onClick={handleClick}>Click to view image</button>
      </div>
      {showImage && <img src={image} alt="Image" />}
      <div>Title is {title}</div>
      <div>Handle is {handle}</div>
    </div>
  );
}

export default ProfileCard;
