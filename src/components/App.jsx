// create your App component here
import React, { use } from "react";
import { useState, useEffect } from "react";
import ImageDisplay from "./ImageDisplay";
import ImageButton from "./ImageButton";

function App() {
  const [imageUrl, setImageUrl] = useState("");
  const [loading, setLoading] = useState(true);

  const fetchImage = async () => {
    try {
      setLoading(true);
      const response = await fetch("https://dog.ceo/api/breeds/image/random");
      const data = await response.json();
      setImageUrl(data.message);
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchImage();
  }, []);

  return (
    <div>
      <>
        <ImageDisplay imageUrl={imageUrl} loading={loading} />
        <ImageButton fetchImage={fetchImage} />
      </>
    </div>
  );
}

export default App;
