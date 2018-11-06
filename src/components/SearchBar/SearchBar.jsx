import React from 'react';
import PropTypes from 'prop-types';
import styles from './SearchBar.scss';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {
    return (
      <div className={styles.SearchBar}>
      </div>
    );
  }
}


SearchBar.propTypes = {
};
SearchBar.defaultProps = {
};

export default SearchBar;