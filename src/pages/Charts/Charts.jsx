import React from 'react';
import PropTypes from 'prop-types';
import styles from './Charts.scss';

import moment from 'moment';
import axios from 'axios';

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
  }

  fetchUserWords() {
    axios.get('/api/v1/user_words/date?start=2018-11-10').then(res => {
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
    const start = moment('2018-11-10').startOf('day');
    const end = moment(start).endOf('day');
    var chart = new Chartist.Line(
      '.ct-chart',
      {
        series: [
          {
            name: 'series-1',
            data: userWords.map(userWord => ({
              x: userWord.timestamp,
              y: 1
            }))
          }
        ]
      },
      {
        axisX: {
          type: Chartist.FixedScaleAxis,
          low: start.valueOf(),
          high: end.valueOf(),
          divisor: 24,
          labelInterpolationFnc: value => {
            return moment(value).format('HH:mm');
          }
        },
        axisY: {
          low: 0,
          high: 2
        }
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
