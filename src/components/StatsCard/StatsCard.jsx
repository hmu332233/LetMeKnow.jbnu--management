import React from "react";
import PropTypes from "prop-types";
import styles from "./StatsCard.scss";

import { Card, CardBody } from "reactstrap";

class StatsCard extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Card className={styles.StatsCard}>
        <CardBody className="text-center">
          <h1 className="mb-0">{this.props.total}</h1>
          <div>{this.props.label}</div>
        </CardBody>
      </Card>
    );
  }
}

StatsCard.propTypes = {
  total: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
  label: PropTypes.string
};
StatsCard.defaultProps = {
  label: '',
  total: 0
};

export default StatsCard;
