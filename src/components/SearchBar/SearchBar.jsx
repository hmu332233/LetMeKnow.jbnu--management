import React from 'react';
import PropTypes from 'prop-types';
import styles from './SearchBar.scss';

import _find from 'lodash/find';

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

class SearchBar extends React.PureComponent {
  constructor(props) {
    super(props);
    this.SEARCH_ITEMS = [{
      content: 'Content',
      value: 'content'
    }, {
      content: 'ID',
      value: 'id'
    }];

    this.state = {
      selectedItem: this.SEARCH_ITEMS[0],
      value: '',
      isOpendropdown: false
    };

    this.handlePressKey = this.handlePressKey.bind(this);
    this.handleChangeInput = this.handleChangeInput.bind(this);
    this.toggleDropDown = this.toggleDropDown.bind(this);
    this.handleSelectDropdownItem = this.handleSelectDropdownItem.bind(this)
  }
  handleSelectDropdownItem(e) {
    const selectedItem = _find(this.SEARCH_ITEMS, { value: e.target.value });
    this.setState({ selectedItem: selectedItem || this.SEARCH_ITEMS[0] });
  }
  handlePressKey(event) {
    if (event.key === 'Enter') {
      const data = {
        value: this.state.value,
        filter: this.state.selectedItem.value
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
            <DropdownToggle caret>{this.state.selectedItem.content}</DropdownToggle>
            <DropdownMenu>
              {this.SEARCH_ITEMS.map(item => (
                <DropdownItem onClick={this.handleSelectDropdownItem} value={item.value}>{item.content}</DropdownItem>
              ))}
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
