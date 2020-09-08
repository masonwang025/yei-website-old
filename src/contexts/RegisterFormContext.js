import React, { createContext, useEffect, useState } from "react";
import * as typeformEmbed from "@typeform/embed";

export const RegisterFormContext = createContext();

const RegisterFormContextProvider = (props) => {
  let [registerForm, updateRegisterForm] = useState();
  useEffect(() => {
    updateRegisterForm(
      typeformEmbed.makePopup("https://form.typeform.com/to/WB3Um6", {
        mode: "popup",
        hideScrollbars: true,
        onClose: () => {
          document.querySelector("body").style.overflow = "auto";
        },
        onSubmit: () => {
          document.querySelector("body").style.overflow = "auto";
        },
      })
    );
  }, []);

  return (
    <RegisterFormContext.Provider
      value={{
        registerForm: registerForm,
      }}
    >
      {props.children}
    </RegisterFormContext.Provider>
  );
};

export default RegisterFormContextProvider;
