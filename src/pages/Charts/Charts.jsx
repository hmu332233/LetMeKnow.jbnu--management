import React from 'react';
import PropTypes from 'prop-types';
import styles from './Charts.scss';

import moment from 'moment';
import axios from 'axios';
import _ from 'lodash';

import BasicLayout from 'components/BasicLayout';

class Charts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      // originUserWords: [],
      userWords: []
    };

    this.fetchUserWords = this.fetchUserWords.bind(this);
  }

  componentDidMount() {
    this.fetchUserWords();
    // this.paintChart()
  }

  fetchUserWords() {
    axios.get('/api/v1/user_words/date').then(res => {
      if (res.data.success) {
        this.setState({
          isLoading: false,
          // originUserWords: res.data.data,
          userWords: res.data.data
        });

        this.paintChart(res.data.data);

        // toast(ToastMessage.FETCH_SUCCESS);
      } else {
        // toast(ToastMessage.FETCH_FAIL);
      }
    });
  }

  paintChart(userWords) {
    const convertedData = _.groupBy(userWords, userWord => moment(userWord.timestamp).format('HH'))
  
    const labels = Object.keys(convertedData).sort()
    const series = [labels.map(key => convertedData[key].length)]

    const chart = new Chartist.Line(
      '.ct-chart',
      {
        labels: ['00','01','02','03','04','05','06','07','08','09','10','11','12','13','14','15','16','17','18','19','20','21','22','23'],
        series
      },
      {
        low: 0,
        showArea: true
      }
    );
  }

  render() {
    return (
      <BasicLayout>
        <div className={styles.Charts}>
          <div className="ct-chart ct-perfect-fourth" />
        </div>
      </BasicLayout>
    );
  }
}

Charts.propTypes = {};
Charts.defaultProps = {};

export default Charts;
