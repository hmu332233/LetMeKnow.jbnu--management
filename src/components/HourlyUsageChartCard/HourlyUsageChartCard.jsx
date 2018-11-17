import React from "react";
import PropTypes from "prop-types";
import styles from "./HourlyUsageChartCard.scss";

import { Card, CardHeader, CardBody } from 'reactstrap';
import UsageCountChart from 'components/UsageCountChart';

class HourlyUsageChartCard extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Card className={styles.HourlyUsageChartCard}>
        <CardHeader>Hourly usage</CardHeader>
        <CardBody style={{ height: "348px" }}>
          <UsageCountChart userWords={this.props.userWords} />
        </CardBody>
      </Card>
    );
  }
}

HourlyUsageChartCard.propTypes = {
  userWords: PropTypes.arrayOf(PropTypes.shape({
    content: PropTypes.string,
    id: PropTypes.string,
    timestamp: PropTypes.number
  }))
};
HourlyUsageChartCard.defaultProps = {};

export default HourlyUsageChartCard;
