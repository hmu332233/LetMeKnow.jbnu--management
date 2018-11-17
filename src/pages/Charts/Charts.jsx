import React from 'react';
import PropTypes from 'prop-types';
import styles from './Charts.scss';

import axios from 'axios';

import { Row, Col } from 'reactstrap';

import BasicLayout from 'components/BasicLayout';
import HourlyUsageChartCard from 'components/HourlyUsageChartCard';
import StatsCard from 'components/StatsCard';

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
      } else {
      }
    });
  }

  render() {
    return (
      <BasicLayout>
        <div className={styles.Charts}>
          <Row>
            <Col xs="6" sm="4" lg="2">
              <StatsCard label="calls" total={this.state.userWords.length} />
            </Col>
          </Row>
          {this.state.isLoading || <HourlyUsageChartCard userWords={this.state.userWords} />}
        </div>
      </BasicLayout>
    );
  }
}

Charts.propTypes = {};
Charts.defaultProps = {};

export default Charts;
