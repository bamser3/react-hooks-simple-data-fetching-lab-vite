import React from "react";

function ImageDisplay({ imageUrl, loading }) {
  if (loading) {
    return <p>Loading...</p>;
  }
  return <img src={imageUrl}></img>;
}

export default ImageDisplay;
