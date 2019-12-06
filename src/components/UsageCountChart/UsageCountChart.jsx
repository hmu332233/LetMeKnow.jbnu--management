import React from 'react';
import PropTypes from 'prop-types';
import styles from './UsageCountChart.scss';

import moment from 'moment';
import _groupBy from 'lodash/groupBy';

class UsageCountChart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };

    this.paintChart = this.paintChart.bind(this)
  }

  componentDidMount() {
    const { userWords } = this.props;
    
    const userWordGroups = _groupBy(userWords, userWord => moment(userWord.createdAt).format('YYYYMMDD'))
    this.paintChart(userWordGroups);
  }

  
  makeSeries(userWords) {
    const convertedData = _groupBy(userWords, userWord => moment(userWord.createdAt).format('HH'))
  
    const labels = ['00','01','02','03','04','05','06','07','08','09','10','11','12','13','14','15','16','17','18','19','20','21','22','23'];
    const series = labels.map(key => convertedData[key] && convertedData[key].length);
    return series;
  }

  paintChart(userWordGroups) {
    const userWordsList = Object.keys(userWordGroups).map(key => userWordGroups[key]);
    const series = userWordsList.map(userWords => this.makeSeries(userWords));

    const chart = new Chartist.Line(
      '.ct-chart',
      {
        labels: ['00','01','02','03','04','05','06','07','08','09','10','11','12','13','14','15','16','17','18','19','20','21','22','23'],
        series
      },
      {
        low: 0,
        showArea: true,
        height: '300px',
        // [[‘screen and (min-width: 640px)', { showPoint: false }]]);
      }
    );
  }

  render() {
    return (
      <div className={styles.UsageCountChart}>
        <div className="ct-chart ct-perfect-fourth" />
      </div>
    );
  }
}


UsageCountChart.propTypes = {
  userWords: PropTypes.arrayOf(PropTypes.shape({
    content: PropTypes.string,
    id: PropTypes.string,
    createdAt: PropTypes.number
  })),
};
UsageCountChart.defaultProps = {
};

export default UsageCountChart;