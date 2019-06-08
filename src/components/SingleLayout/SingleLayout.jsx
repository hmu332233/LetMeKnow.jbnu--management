import React from 'react';
import PropTypes from 'prop-types';
import styles from './SingleLayout.scss';

function SingleLayout(props) {
  return (
    <div className="page">
      <div className="page-single">
        <div className="container">
          {props.children}
        </div>
      </div>
    </div>
  );
}

SingleLayout.propTypes = {
};
SingleLayout.defaultProps = {
};

export default SingleLayout;