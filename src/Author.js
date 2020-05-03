import React, { Component, Fragment } from 'react';
import Header from './Header';
import DataAuthors from './DataAuthors';
import ApiService from './ApiService';

class Author extends Component {
  constructor(props) {
    super(props);

    this.state = {
      authors: [],
    };
  };

  componentDidMount() {
    ApiService.AuthorList()
      .then(res => {
        this.setState({authors: [...this.state.authors, ...res]})
      });
  };

  render() {
    return (
      <Fragment>
        <Header />
        <div className='container'>
          <h1>Authors</h1>
          <DataAuthors data={this.state.authors} />
        </div>
      </Fragment>
    )
  }
};

export default Author;
