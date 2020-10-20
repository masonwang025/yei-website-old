import React, { createContext, useState } from "react";

export const CtaPopupContext = createContext();

const CtaPopupContextProvider = (props) => {
  let [popupShown, updatePopupShown] = useState(false);
  let [open, setOpen] = useState(false);

  return (
    <CtaPopupContext.Provider
      value={{
        popupShown: popupShown,
        updatePopupShown: updatePopupShown,
        open: open,
        setOpen: setOpen,
      }}
    >
      {props.children}
    </CtaPopupContext.Provider>
  );
};

export default CtaPopupContextProvider;
