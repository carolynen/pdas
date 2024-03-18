import React from "react";
import ProfileCard from "./profile-card";

function App() {
  const [image, setImage] = React.useState(null);
  const [image1, setImage1] = React.useState(null);
  const [image2, setImage2] = React.useState(null);

  const fetchImage = (img) => {
    setImage(img);
  };
  const fetchImage1 = (img) => {
    setImage1(img);
  };
  const fetchImage2 = (img) => {
    setImage2(img);
  };

  return (
    <div>
      <div>Personal Card Assistant</div>

      <ProfileCard
        title="Alexa"
        handle="@alexa99"
        item="a"
        fetchImageProp={fetchImage}
        image={image}
      />
      <ProfileCard
        title="Cortana"
        handle="@cortana32"
        item="c"
        fetchImageProp={fetchImage1}
        image={image1}
      />
      <ProfileCard
        title="Siri"
        handle="@siri01"
        item="s"
        fetchImageProp={fetchImage2}
        image={image2}
      />
    </div>
  );
}
export default App;
