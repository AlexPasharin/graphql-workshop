import React from 'react';
import { gql } from 'apollo-boost';
import { graphql } from 'react-apollo';

const getAuthorsQuery = gql`
  {
    authors {
      name
      id
    }
  }
`;
class AddBook extends React.Component {
  constructor() {
    super()
    this.state = {
      name: "",
      genre: "",
      price: NaN,
      authorId: "",
    }
  }

  displayAuthors = () => {
    const {data} = this.props;

    if (data.loading) return null;

    return data.authors.map(author => (
      <option
        key={author.id}
        value={author.id}
      >
        {author.name}
      </option>
    )
  );
  }

  submitForm = e => {
    e.preventDefault();
    console.log(this.state);
  }


  render() {
    return (
      <form id="add-book" onSubmit={this.submitForm}>
          <div className="field">
              <label>Book name:</label>
              <input
                type="text"
                onChange={e => this.setState({name: e.target.value})}
              />
          </div>
          <div className="field">
              <label>Genre:</label>
              <input
                type="text"
                onChange={e => this.setState({genre: e.target.value})}
              />
          </div>
          <div className="field">
              <label>Price:</label>
              <input
                type="number"
                step="0.01"
                onChange={e => this.setState({price: parseFloat(e.target.value)})}
              />
          </div>
          <div className="field">
              <label>Author:</label>
              <select onChange={e => this.setState({authorId: e.target.value})}>
                  <option value="">Select author</option>
                  {this.displayAuthors()}
              </select>
          </div>
          <button>+</button>
       </form>
    );
  }
}

export default graphql(getAuthorsQuery)(AddBook);
