import React from "react";

const ContactMe = () => {
  const marginStyle = { marginBottom: "50px" };
  return (
    <div
      className="ContactMe-wrapper"
      style={{ display: "grid", justifyContent: "center" }}
    >
      <h1 className="text-center" style={marginStyle}>
        Contact Me
      </h1>
      <h3 className="text-center" style={marginStyle}>
        \EMAIL HERE\
      </h3>
      <a
        className="btn btn-info"
        href="https://google.com"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          textDecoration: "none",
          color: "white",
          ...marginStyle,
        }}
      >
        Link
      </a>
    </div>
  );
};

export default ContactMe;
