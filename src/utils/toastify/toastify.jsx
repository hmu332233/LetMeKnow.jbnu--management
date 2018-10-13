import React from "react";


import { ToastContainer, Slide, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

const ToastMessage = {
  SUCCESS: "SUCCESS"
};
const showToast = message => {
  let toastMessage = "";
  let toastColor = "";
  switch (message) {
    case ToastMessage.SUCCESS:
      toastMessage = "성공!";
      toastColor = "";
      break;
  }

  toast(toastMessage, {
    className: ''
  });
};
const withToastify = WrappedComponent => {
  return props => {
    return (
      <React.Fragment>
        <ToastContainer
          hideProgressBar
          newestOnTop
          autoClose={3000}
          closeButton={false}
          position={toast.POSITION.TOP_RIGHT}
          style={{ marginTop: "90px" }}
          transition={Slide}
        />
        <WrappedComponent {...props} />
      </React.Fragment>
    );
  };
};
export { withToastify, ToastMessage, showToast as toast };
