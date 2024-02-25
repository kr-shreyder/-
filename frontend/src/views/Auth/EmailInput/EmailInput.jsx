import React from "react";
import "./EmailInput.scss";

const EmailInput = () => {
  return (
    <div className="email">
      <label className="email__label" for="email">Email пользователя</label>
      <input type="email" name="email" className="email__input" />
    </div>
  );
};

export default EmailInput;
