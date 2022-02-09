import React from 'react';
import './App.css';
import Pagination from "./components/Pagination";
import { baseApiUrl } from './constants';
import ResultView from './components/ResultView';
import ReactPaginate from 'react-paginate';

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

  componentDidMount() {
    this.handleSearch(this.state.searchInput, 1);
  }

  setSearchInput(event) {
    this.setState({ searchInput: event.target.value });
  }

  handlePageClick = (e) => {
    const page = e.selected + 1;
    this.handleSearch(this.state.searchInput, page);
  }

  handleSearch = (input, page) => {
    fetch(`${baseApiUrl}/recipes?search=${input}&page=${page}`)
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
        <div>
        <input
          type="text"
          onChange={this.setSearchInput}>
        </input>
          <button onClick={() => { this.handleSearch(this.state.searchInput, 1) }}>
            Search!
          </button>
        </div>
        {/* <Pagination
          onSearch={this.handleSearch}
          loadData={this.loadData}
          searchInput={this.state.searchInput}
          recipes={this.state.recipes}
          page={this.state.page}
          per_page={this.state.per_page}
          total={this.state.total}
        ></Pagination> */}
<>
        <ResultView recipes={this.state.recipes}></ResultView>
        <ReactPaginate
          previousLabel={"prev"}
          nextLabel={"next"}
          breakLabel={"..."}
          breakClassName={"break-me"}
          pageCount={this.state.pageCount}
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
          onPageChange={this.handlePageClick}
          containerClassName={"pagination"}
          subContainerClassName={"pages pagination"}
          activeClassName={"active"}/>
      </>
      </div>
    );
  }
}

export default App;