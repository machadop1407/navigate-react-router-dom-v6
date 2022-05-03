import React from "react";
import { useNavigate } from "react-router-dom";

function Contact() {
  const navigate = useNavigate();

  return (
    <div>
      Contact{" "}
      <button
        onClick={() => {
          navigate("/");
        }}
      >
        Go to the home page
      </button>
    </div>
  );
}

export default Contact;
