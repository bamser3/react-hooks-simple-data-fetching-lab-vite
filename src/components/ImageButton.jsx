import React from "react";

function ImageButton({ fetchImage }) {
  return <button onClick={fetchImage}>Fetch Image</button>;
}

export default ImageButton;
