import React, { Component, createRef } from "react";
import getBooks from "./index";

class App extends Component {
  searchRef = createRef();
  state = {
    results: [],
    selectedbooks: null,
  };
  searchBooks = (keyword) => {
    console.log(`searching for ${keyword}`);
    if (keyword !== "") {
      const getTitles = getBooks(keyword);
      this.setState({
        results: getTitles,
      });
    } else {
      this.setState({
        results: [],
      });
    }
  };

  clear = () => {
    this.searchRef.current.value = "";
    this.setState({
      results: [],
    });
  };

  render() {
    return (
      <div className="book-app">
        <div className="title">The Library Catalog</div>
        <div title="search-box">
          <input
            type="text"
            ref={this.searchRef}
            onChange={(e) => this.searchBooks(e.target.value)}
          />
          <div className="clear-btn"> X </div>
          <div className="search-results"></div>
        </div>
      </div>
    );
  }
}
export default App;
