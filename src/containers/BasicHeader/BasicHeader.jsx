import React from 'react';
import PropTypes from 'prop-types';
import styles from './BasicHeader.scss';


import Header from 'components/Header';
import HeaderNav from 'components/HeaderNav';

class BasicHeader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpenNav: false
    };

    this.navMenus = [{
      icon: 'home',
      name: 'Usage',
      to: '/usage'
    }, {
      icon: 'pie-chart',
      name: 'Charts',
      to: '/'
    }, {
      icon: 'book-open',
      name: 'Week Summary',
      to: '/summary'
    }, {
      icon: 'message-circle',
      name: 'Chat Test',
      to: '/chat'
    }, {
      icon: 'settings',
      name: 'Settings',
      to: '/settings'
    }];

    this.handleClickToggler = this.handleClickToggler.bind(this);
  }

  handleClickToggler() {
    this.setState({
      isOpenNav: !this.state.isOpenNav
    });
  }

  render() {
    return (
      <div className={styles.BasicHeader}>
        <Header
          togglerClickHandler={this.handleClickToggler}
        />
        <HeaderNav
          isOpen={this.state.isOpenNav}
          navMenus={this.navMenus}
        />
      </div>
    );
  }
}


BasicHeader.propTypes = {
};
BasicHeader.defaultProps = {
};

export default BasicHeader;