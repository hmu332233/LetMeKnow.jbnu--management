import React from "react";


import { ToastContainer, Slide, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

const ToastMessage = {
  FETCH_SUCCESS: "FETCH_SUCCESS",
  FETCH_FAIL: "FETCH_FAIL",
};
const showToast = message => {
  let toastMessage = "";
  let toastColor = "";
  switch (message) {
    case ToastMessage.FETCH_SUCCESS:
      toastMessage = "데이터 로딩에 성공했습니다.";
      toastColor = "";
      break;
    case ToastMessage.FETCH_FAIL:
      toastMessage = "데이터 로딩에 실패했습니다.";
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
