import React from "react";
import { graphql, compose } from "react-apollo";
import { getAuthorsQuery, addBookMutation } from "../queries";

class AddBook extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "",
      genre: "",
      price: NaN,
      authorId: ""
    };
  }

  displayAuthors = () => {
    const { getAuthorsQuery } = this.props;

    if (getAuthorsQuery.loading) return null;

    return getAuthorsQuery.authors.map(author => (
      <option key={author.id} value={author.id}>
        {author.name}
      </option>
    ));
  };

  submitForm = e => {
    e.preventDefault();
    console.log(this.state);
    this.props.addBookMutation({
      variables: {
        id: "10",
        title: this.state.name,
        genre: this.state.genre,
        price: this.state.price,
        authorId: this.state.authorId
      }
    });
    this.setState({
      name: "",
      genre: "",
      price: NaN,
      authorId: ""
    });
  };

  render() {
    return (
      <form id="add-book" onSubmit={this.submitForm}>
        <div className="field">
          <label>Book name:</label>
          <input
            type="text"
            onChange={e => this.setState({ name: e.target.value })}
          />
        </div>
        <div className="field">
          <label>Genre:</label>
          <input
            type="text"
            onChange={e => this.setState({ genre: e.target.value })}
          />
        </div>
        <div className="field">
          <label>Price:</label>
          <input
            type="number"
            step="0.01"
            onChange={e => this.setState({ price: parseFloat(e.target.value) })}
          />
        </div>
        <div className="field">
          <label>Author:</label>
          <select onChange={e => this.setState({ authorId: e.target.value })}>
            <option value="">Select author</option>
            {this.displayAuthors()}
          </select>
        </div>
        <button>+</button>
      </form>
    );
  }
}

export default compose(
  graphql(getAuthorsQuery, { name: "getAuthorsQuery" }),
  graphql(addBookMutation, { name: "addBookMutation" })
)(AddBook);
