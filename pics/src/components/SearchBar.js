import React from "react";

class SearchBar extends React.Component {
  state = { term: "" };
  inputOnChange = (e) => {
    this.setState({ term: e.target.value });
  };
  formOnSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit(this.state.term);
  };
  render() {
    return (
      <div>
        <form onSubmit={this.formOnSubmit}>
          <label>Enter text:</label>
          <input onChange={this.inputOnChange} value={this.state.term}></input>
        </form>
      </div>
    );
  }
}
export default SearchBar;
