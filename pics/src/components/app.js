import React from "react";
import SearchBar from "./SearchBar";

class App extends React.Component {
  onSearchSubmit(term) {
    console.log("input is the term", term);
  }
  render() {
    return (
      <div>
        <SearchBar onSubmit={this.onSearchSubmit} />
      </div>
    );
  }
}

export default App;
