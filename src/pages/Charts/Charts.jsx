import React from 'react';
import PropTypes from 'prop-types';
import styles from './Charts.scss';

import moment from 'moment';
import axios from 'axios';
import _ from 'lodash';

import BasicLayout from 'components/BasicLayout';
import UsageCountChart from 'components/UsageCountChart';

class Charts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      userWords: []
    };

    this.fetchUserWords = this.fetchUserWords.bind(this);
  }

  componentDidMount() {
    this.fetchUserWords();
  }

  fetchUserWords() {
    axios.get('/api/v1/user_words/date').then(res => {
      if (res.data.success) {
        this.setState({
          isLoading: false,
          userWords: res.data.data
        });

        this.paintChart(res.data.data);

      } else {

      }
    });
  }



  render() {
    return (
      <BasicLayout>
        <div className={styles.Charts}>
          {this.state.isLoading || <UsageCountChart userWords={this.state.userWords} />}
        </div>
      </BasicLayout>
    );
  }
}

Charts.propTypes = {};
Charts.defaultProps = {};

export default Charts;
