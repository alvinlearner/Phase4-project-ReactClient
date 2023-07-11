import React from "react";

export default function EventDelete(props) {
  const handleClick = () => {
    props.onDelete();
  };

  return (
    <button onClick={handleClick}>Delete</button>
  );
}
