import React from 'react';
import PropTypes from 'prop-types';
import styles from './UseDbSwitchCardControl.scss';

import UseDbSwitchCard from 'components/UseDbSwitchCard';

function toggleSwitch(type) {
  return prevState => ({ [type]: !prevState[type] });
}

class UseDbSwitchCardControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      medi: false,
      hu: false,
      jungdam: false,
      jinsu: false,
      studentHall: false
    };

    this.toggleMedi = this.toggleMedi.bind(this);
    this.toggleHu = this.toggleHu.bind(this);
    this.toggleJungdam = this.toggleJungdam.bind(this);
    this.toggleJinsu = this.toggleJinsu.bind(this);
    this.toggleStudentHall = this.toggleStudentHall.bind(this);
  }

  toggleMedi() {
    this.setState(toggleSwitch('medi'));
  }

  toggleHu() {
    this.setState(toggleSwitch('hu'));
  }

  toggleJungdam() {
    this.setState(toggleSwitch('jungdam'));
  }

  toggleJinsu() {
    this.setState(toggleSwitch('jinsu'));
  }

  toggleStudentHall() {
    this.setState(toggleSwitch('studentHall'));
  }

  render() {
    return (
      <UseDbSwitchCard
        medi={this.state.medi}
        hu={this.state.hu}
        jungdam={this.state.jungdam}
        jinsu={this.state.jinsu}
        studentHall={this.state.studentHall}

        mediToggler={this.toggleMedi}
        huToggler={this.toggleHu}
        jungdamToggler={this.toggleJungdam}
        jinsuToggler={this.toggleJinsu}
        studentHallToggler={this.toggleStudentHall}
      />
    );
  }
}

UseDbSwitchCardControl.propTypes = {
};
UseDbSwitchCardControl.defaultProps = {
};

export default UseDbSwitchCardControl;