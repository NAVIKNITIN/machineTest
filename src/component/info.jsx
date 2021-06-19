import React from "react";

const Info = ({ text }) => {
  return <p> {text} </p>;
};

Info.defaultProps = {
  text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus voluptatum vel perspiciatis officia ducimus nemo autem ex! Expedita amet aut, fugit quaerat eligendi nisi corrupti, eaque obcaecati, adipisci dicta aliquid?",
};

export default Info;
