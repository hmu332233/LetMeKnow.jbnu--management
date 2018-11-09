import React from 'react';
import PropTypes from 'prop-types';
import styles from './Header.scss';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="header py-4">
        <div className="container">
          <div className="d-flex">
            <a className="header-brand" href="./index.html">
              MANAGEMENT
            </a>
            <div className="d-flex order-lg-2 ml-auto">
              <a href="#" className="nav-link pr-0 leading-none">
                <span
                  className="avatar"
                  style={{
                    backgroundImage: ''
                  }}
                />
                <span className="ml-2 d-none d-lg-block">
                  <span className="text-default">minung.han</span>
                  <small className="text-muted d-block mt-1">
                    Administrator
                  </small>
                </span>
              </a>
              <a
                className="d-lg-none ml-3 ml-lg-0 header-toggler"
                onClick={this.props.togglerClickHandler}
              >
                <span className="header-toggler-icon" />
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Header.propTypes = {
  togglerClickHandler: PropTypes.func
};
Header.defaultProps = {};

export default Header;
