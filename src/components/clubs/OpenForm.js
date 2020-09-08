import React, { useContext, useRef, useEffect } from "react";
import { RegisterFormContext } from "../../contexts/RegisterFormContext";
import ReactDOM from "react-dom";
import { Box } from "@material-ui/core";

export default function OpenForm(props) {
  const { registerForm } = useContext(RegisterFormContext);
  let triggerForm = useRef(null);

  useEffect(() => {
    ReactDOM.findDOMNode(triggerForm).addEventListener("click", () => {
      if (registerForm) {
        document.querySelector("body").style.overflow = "hidden";
        registerForm.open();
      }
    });
  }, [registerForm]);

  return (
    <Box
      ref={(node) => (triggerForm = node)}
      component={props.inline ? "span" : "div"}
    >
      {props.children}
    </Box>
  );
}
