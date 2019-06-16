import React from 'react';
import PropTypes from 'prop-types';
import styles from './UseDbSwitchCard.scss';

import { Card, CardHeader, CardBody } from 'reactstrap';

import LabeledSwitch from 'components/LabeledSwitch';

function UseDbSwitchCard(props) {
  return (
    <Card className={styles.UseDbSwitchCard}>
      <CardHeader>use db switch</CardHeader>
      <CardBody>
        <LabeledSwitch
          label={'의대'}
          value={props.medi}
          toggle={props.mediToggler}
        />
        <LabeledSwitch
          label={'후생관'}
          value={props.hu}
          toggle={props.huToggler}
        />
        <LabeledSwitch
          label={'정담원'}
          value={props.jungdam}
          toggle={props.jungdamToggler}
        />
        <LabeledSwitch
          label={'진수당'}
          value={props.jinsu}
          toggle={props.jinsuToggler}
        />
        <LabeledSwitch
          label={'학생회관'}
          value={props.studentHall}
          toggle={props.studentHallToggler}
        />
      </CardBody>
    </Card>
  );
}

UseDbSwitchCard.propTypes = {
  medi: PropTypes.bool,
  mediToggler: PropTypes.func,
  hu: PropTypes.bool,
  huToggler: PropTypes.func,
  jungdam: PropTypes.bool,
  jungdamToggler: PropTypes.func,
  jinsu: PropTypes.bool,
  jinsuToggler: PropTypes.func,
  studentHall: PropTypes.bool,
  studentHallToggler: PropTypes.func
};
UseDbSwitchCard.defaultProps = {
  medi: false,
  hu: false,
  jungdam: false,
  jinsu: false,
  studentHall: false
};

export default UseDbSwitchCard;