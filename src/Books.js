import React, { Component, Fragment } from 'react';
import Header from './Header';
import DataBooks from './DataBooks';
import ApiService from './ApiService';

class Books extends Component {
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
          <h1>Books</h1>
          <DataBooks data={this.state.authors} />
        </div>
      </Fragment>
    )
  }
};

export default Books;
