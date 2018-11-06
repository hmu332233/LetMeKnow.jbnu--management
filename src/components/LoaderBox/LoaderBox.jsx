import React from "react";
import PropTypes from "prop-types";
import styles from "./LoaderBox.scss";

import classNames from "classnames/bind";
const cx = classNames.bind(styles);

import Loader from "components/Loader";

class LoaderBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return this.props.isLoading ? (
      <div
        className={cx(
          { LoaderBox: true },
          { maxHeight: this.props.maxHeight },
          { maxWidth: this.props.maxWidth },
          { centered: this.props.centered }
        )}
      >
        <Loader />
      </div>
    ) : (
      this.props.children
    );
  }
}

LoaderBox.propTypes = {
  isLoading: PropTypes.bool,
  maxHeight: PropTypes.bool,
  maxWidth: PropTypes.bool,
  centered: PropTypes.bool
};
LoaderBox.defaultProps = {
  isLoading: true,
  maxHeight: false,
  maxWidth: false,
  centered: false
};

export default LoaderBox;
