import React from 'react';
import PropTypes from 'prop-types';
import styles from './SearchBar.scss';

import {
  InputGroup,
  InputGroupAddon,
  InputGroupButtonDropdown,
  InputGroupDropdown,
  Input,
  Button,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filter: '',
      value: '',
      isOpendropdown: false
    };

    this.handlePressKey = this.handlePressKey.bind(this);
    this.handleChangeInput = this.handleChangeInput.bind(this);
    this.toggleDropDown = this.toggleDropDown.bind(this);
  }

  handlePressKey(event) {
    if (event.key === 'Enter') {
      const data = {
        value: this.state.value,
        filter: this.state.filter
      };
      this.props.pressEnterHandler && this.props.pressEnterHandler(data);
    }
  }
  handleChangeInput(event) {
    this.setState({ value: event.target.value });
  }
  toggleDropDown() {
    this.setState({
      isOpendropdown: !this.state.isOpendropdown
    });
  }

  render() {
    return (
      <div className={styles.SearchBar}>
        <InputGroup>
          <InputGroupButtonDropdown
            addonType="prepend"
            isOpen={this.state.isOpendropdown}
            toggle={this.toggleDropDown}
          >
            <DropdownToggle caret>Content</DropdownToggle>
            <DropdownMenu>
              <DropdownItem>Content</DropdownItem>
              <DropdownItem>ID</DropdownItem>
            </DropdownMenu>
          </InputGroupButtonDropdown>
          <Input
            onChange={this.handleChangeInput}
            onKeyPress={this.handlePressKey}
          />
        </InputGroup>
      </div>
    );
  }
}

SearchBar.propTypes = {
  pressEnterHandler: PropTypes.func
};
SearchBar.defaultProps = {};

export default SearchBar;
