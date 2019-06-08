import React from 'react';
import PropTypes from 'prop-types';
import styles from './Charts.scss';

import _ from 'lodash';
import axios from 'axios';
import moment from 'moment';
import 'react-dates/initialize';
import { DateRangePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';

import { Row, Col, Button } from 'reactstrap';

import BasicLayout from 'components/BasicLayout';
import HourlyUsageChartCard from 'components/HourlyUsageChartCard';
import StatsCard from 'components/StatsCard';
import Loader from 'components/Loader';

import userWordsUtils from 'utils/js/userWords.js'

class Charts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      userWords: [],
      startDate: moment(),
      endDate: moment()
    };

    this.fetchUserWords = this.fetchUserWords.bind(this);
    this.handleDatesChange = this.handleDatesChange.bind(this);
    this.handleFetchButtonClick = this.handleFetchButtonClick.bind(this);
  }

  componentDidMount() {
  }

  handleDatesChange({ startDate, endDate }) {
    this.setState({ startDate, endDate });
  }

  handleFetchButtonClick() {
    this.setState({ isLoading: true });
    this.fetchUserWords({
      startDate: this.state.startDate,
      endDate: this.state.endDate
    });
  }

  fetchUserWords({ startDate, endDate }) {
    const params = {
      start: startDate && startDate.format('YYYYMMDD'),
      end: endDate && endDate.format('YYYYMMDD')
    };
    axios.get('/api/v1/user_words/date', { params }, { withCredentials: true }).then(res => {
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
          <Row className="mb-3">
            <Col>
              <DateRangePicker
                displayFormat="YYYY-MM-DD"
                startDate={this.state.startDate}
                startDateId="start_date_id"
                endDate={this.state.endDate}
                endDateId="end_date_id"
                onDatesChange={this.handleDatesChange}
                focusedInput={this.state.focusedInput}
                onFocusChange={focusedInput => this.setState({ focusedInput })}
                minimumNights={0}
                hideKeyboardShortcutsPanel
                isOutsideRange={() => false}
                numberOfMonths={1}
              />
              <Button className="ml-1" size="lg" onClick={this.handleFetchButtonClick}>fetch!</Button>
            </Col>
          </Row>

          <Row>
            <Col xs="6" sm="4" lg="2">
              <StatsCard label="calls" total={this.state.userWords.length} />
            </Col>
            <Col xs="6" sm="4" lg="2">
              <StatsCard label="users" total={userWordsUtils.getUniqUserId(this.state.userWords).length} />
            </Col>
          </Row>
          {this.state.isLoading ? (
            <Loader />
          ) : (
            <HourlyUsageChartCard userWords={this.state.userWords} />
          )}
        </div>
      </BasicLayout>
    );
  }
}

Charts.propTypes = {};
Charts.defaultProps = {};

export default Charts;
