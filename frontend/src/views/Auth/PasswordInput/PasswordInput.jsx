import React from "react";
import "./PasswordInput.scss";

const PasswordInput = () => {
  return (
    <div className="password">
      <label className="password_label" for="password">Пароль</label>
      <input type="password" name="password" className="password__input" />
    </div>
  );
};

export default PasswordInput;
