import React from 'react';
import PropTypes from 'prop-types';
import styles from './UseDbSwitchCardControl.scss';

import axios from 'axios';

import UseDbSwitchCard from 'components/UseDbSwitchCard';

function toggleSwitch(type) {
  return prevState => ({ [type]: !prevState[type] });
}

class UseDbSwitchCardControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      medi: false,
      hu: false,
      jungdam: false,
      jinsu: false,
      studentHall: false
    };

    this.fetchUseDb = this.fetchUseDb.bind(this)
    this.toggleMedi = this.toggleMedi.bind(this);
    this.toggleHu = this.toggleHu.bind(this);
    this.toggleJungdam = this.toggleJungdam.bind(this);
    this.toggleJinsu = this.toggleJinsu.bind(this);
    this.toggleStudentHall = this.toggleStudentHall.bind(this);
  }

  componentDidMount() {
    this.fetchUseDb();
  }

  fetchUseDb() {
    axios
      .get('/api/v1/bot/use_db')
      .then(res => {
        if (res.data.success) {
          const { medi, hu, jungdam, jinsu, studentHall } = res.data.data;
          this.setState({ medi, hu, jungdam, jinsu, studentHall, isLoading: false });
        }
      });
  }

  toggleMedi() {
    axios
      .put('/api/v1/bot/use_db', { type: 'medi' })
      .then(res => {
        if (res.data.success) {
          this.setState(toggleSwitch('medi'));
        }
      });
  }

  toggleHu() {
    axios
      .put('/api/v1/bot/use_db', { type: 'hu' })
      .then(res => {
        if (res.data.success) {
          this.setState(toggleSwitch('hu'));
        }
      });
  }

  toggleJungdam() {
    axios
      .put('/api/v1/bot/use_db', { type: 'jungdam' })
      .then(res => {
        if (res.data.success) {
          this.setState(toggleSwitch('jungdam'));
        }
      });
  }

  toggleJinsu() {
    axios
      .put('/api/v1/bot/use_db', { type: 'jinsu' })
      .then(res => {
        if (res.data.success) {
          this.setState(toggleSwitch('jinsu'));
        }
      });
  }

  toggleStudentHall() {
    axios
      .put('/api/v1/bot/use_db', { type: 'student_hall' })
      .then(res => {
        if (res.data.success) {
          this.setState(toggleSwitch('studentHall'));
        }
      });
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