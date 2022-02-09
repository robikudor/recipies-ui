import React from 'react';
import ResultView from './ResultView';
import ReactPaginate from 'react-paginate';


class Pagination extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: props.recipes,
      pageCount: Math.ceil(props.total / props.per_page)
    };
  }

  render() {
    return (
      <>
        <ResultView recipes={this.props.recipes}></ResultView>
        <ReactPaginate
          previousLabel={"prev"}
          nextLabel={"next"}
          breakLabel={"..."}
          breakClassName={"break-me"}
          pageCount={this.props.pageCount}
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
          onPageChange={(e) => this.props.handleSearch(e.selected + 1)}
          containerClassName={"pagination"}
          subContainerClassName={"pages pagination"}
          activeClassName={"active"} />
      </>
    );
  }
}

export default Pagination;