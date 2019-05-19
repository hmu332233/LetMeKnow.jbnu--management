import React from "react";
import PropTypes from "prop-types";
import styles from "./StatsCard.scss";

import { Card, CardBody } from "reactstrap";

function StatsCard(props) {
  return (
    <Card className={styles.StatsCard}>
      <CardBody className="text-center">
        <h1 className="mb-0">{props.total}</h1>
        <div>{props.label}</div>
      </CardBody>
    </Card>
  );
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

export default React.memo(StatsCard);
