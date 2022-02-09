import React from 'react';
import './App.css';
import Pagination from "./components/Pagination";
import SearchBar from "./components/SearchBar";
import { baseApiUrl } from './constants';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      recipes: [],
      page: 1,
      per_page: 10,
      total: 0,
      searchInput: '',
      pageCount: Math.ceil(props.total / props.per_page)
    }
    this.setSearchInput = this.setSearchInput.bind(this);
  }

  setSearchInput(event) {
    this.setState({ searchInput: event.target.value });
  }

  handleSearch = (page = 1) => {
    fetch(`${baseApiUrl}/recipes?search=${this.state.searchInput}&page=${page}`)
      .then((response) => {
        if (response.ok) {
          return response.json()
        }
      })
      .then((data) => {
        this.loadData(data);
      });
  }

  loadData = (data) => {
    console.log({data});
    this.setState({
      recipes: data.recipes,
      page: data.page,
      per_page: data.per_page,
      total: data.total_count,
      pageCount: Math.ceil(data.total_count / data.per_page)
    })
  }

  render() {
    return (
      <div className="App">
        <SearchBar
          setSearchInput={this.setSearchInput}
          handleSearch={this.handleSearch}/>
        <Pagination
          handleSearch={this.handleSearch}
          searchInput={this.state.searchInput}
          recipes={this.state.recipes}
          pageCount={this.state.pageCount}
        ></Pagination>
      </div>
    );
  }
}

export default App;