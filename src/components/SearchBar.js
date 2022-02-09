import React from 'react';

class SearchBar extends React.Component {
  render() {
    return (
      <div>
        <input
          type="text"
          onChange={(e) => this.props.setSearchInput(e)}>
        </input>
        <button onClick={() => { this.props.handleSearch() }}>
          Search!
        </button>
      </div>
    );
  }
}

export default SearchBar;