import React from 'react';
import PropTypes from 'prop-types';
import styles from './Settings.scss';

import BasicLayout from 'components/BasicLayout';
import UseDbSwitchCardControl from 'containers/UseDbSwitchCardControl';

class Settings extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <BasicLayout>
        <div className={styles.Settings}>
          <UseDbSwitchCardControl />
        </div>
      </BasicLayout>
    );
  }
}

Settings.propTypes = {
};
Settings.defaultProps = {
};

export default Settings;