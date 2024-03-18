import React from "react";
import AlexaImage from "./images/alexa.png";
import CortanaImage from "./images/cortana.png";
import SiriImage from "./images/siri.png";

function ProfileCard({ title, handle, item, image, fetchImageProp }) {
  const [img, setImage] = React.useState(null);
  const [img1, setImage1] = React.useState(null);
  const [img2, setImage2] = React.useState(null);

  const handleClick = () => {
    if (item === "a") {
      setImage(AlexaImage);
      fetchImageProp(img);
    } else if (item === "c") {
      setImage1(CortanaImage);
      fetchImageProp(img1);
    } else if (item === "s") {
      setImage2(SiriImage);
      fetchImageProp(img);
    }
  };
  return (
    <div>
      <img src={image} alt="pda logo" />
      <button onClick={handleClick}>Click to view image</button>
      <div>Title is {title}</div>
      <div>Handle is {handle}</div>
    </div>
  );
}

export default ProfileCard;
