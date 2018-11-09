import React from 'react';
import PropTypes from 'prop-types';
import styles from './HeaderNav.scss';

import { Collapse, Button, CardBody, Card } from 'reactstrap';

class HeaderNav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Collapse className={'header d-lg-flex p-0'} isOpen={true}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg order-lg-first">
              <ul className="nav nav-tabs border-0 flex-column flex-lg-row">
                <li className="nav-item">
                  <a href="./index.html" className="nav-link">
                    <i className="fe fe-home" /> Home
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    href="javascript:void(0)"
                    className="nav-link"
                    data-toggle="dropdown"
                  >
                    <i className="fe fe-box" /> Interface
                  </a>
                  <div className="dropdown-menu dropdown-menu-arrow">
                    <a href="./cards.html" className="dropdown-item ">
                      Cards design
                    </a>
                    <a href="./charts.html" className="dropdown-item ">
                      Charts
                    </a>
                    <a href="./pricing-cards.html" className="dropdown-item ">
                      Pricing cards
                    </a>
                  </div>
                </li>
                <li className="nav-item dropdown">
                  <a
                    href="javascript:void(0)"
                    className="nav-link"
                    data-toggle="dropdown"
                  >
                    <i className="fe fe-calendar" /> Components
                  </a>
                  <div className="dropdown-menu dropdown-menu-arrow">
                    <a href="./maps.html" className="dropdown-item ">
                      Maps
                    </a>
                    <a href="./icons.html" className="dropdown-item ">
                      Icons
                    </a>
                    <a href="./store.html" className="dropdown-item ">
                      Store
                    </a>
                    <a href="./blog.html" className="dropdown-item ">
                      Blog
                    </a>
                    <a href="./carousel.html" className="dropdown-item ">
                      Carousel
                    </a>
                  </div>
                </li>
                <li className="nav-item dropdown">
                  <a
                    href="javascript:void(0)"
                    className="nav-link active"
                    data-toggle="dropdown"
                  >
                    <i className="fe fe-file" /> Pages
                  </a>
                  <div className="dropdown-menu dropdown-menu-arrow">
                    <a href="./profile.html" className="dropdown-item ">
                      Profile
                    </a>
                    <a href="./login.html" className="dropdown-item ">
                      Login
                    </a>
                    <a href="./register.html" className="dropdown-item ">
                      Register
                    </a>
                    <a href="./forgot-password.html" className="dropdown-item ">
                      Forgot password
                    </a>
                    <a href="./400.html" className="dropdown-item ">
                      400 error
                    </a>
                    <a href="./401.html" className="dropdown-item ">
                      401 error
                    </a>
                    <a href="./403.html" className="dropdown-item ">
                      403 error
                    </a>
                    <a href="./404.html" className="dropdown-item ">
                      404 error
                    </a>
                    <a href="./500.html" className="dropdown-item ">
                      500 error
                    </a>
                    <a href="./503.html" className="dropdown-item ">
                      503 error
                    </a>
                    <a href="./email.html" className="dropdown-item ">
                      Email
                    </a>
                    <a href="./empty.html" className="dropdown-item active">
                      Empty page
                    </a>
                    <a href="./rtl.html" className="dropdown-item ">
                      RTL mode
                    </a>
                  </div>
                </li>
                <li className="nav-item dropdown">
                  <a href="./form-elements.html" className="nav-link">
                    <i className="fe fe-check-square" /> Forms
                  </a>
                </li>
                <li className="nav-item">
                  <a href="./gallery.html" className="nav-link">
                    <i className="fe fe-image" /> Gallery
                  </a>
                </li>
                <li className="nav-item">
                  <a href="./docs/index.html" className="nav-link">
                    <i className="fe fe-file-text" /> Documentation
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Collapse>
    );
  }
}

HeaderNav.propTypes = {};
HeaderNav.defaultProps = {};

export default HeaderNav;
