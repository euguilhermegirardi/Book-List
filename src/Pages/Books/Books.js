import React, { Component, Fragment } from 'react';
import Header from '../../Components/Header/Header';
import DataList from '../../Components/DataList/DataList';
import ApiService from '../../API/ApiService';

class Books extends Component {
  constructor(props) {
    super(props);

    this.state = {
      books: [],
    };
  };

  componentDidMount() {
    ApiService.AuthorList()
      .then(res => {
        this.setState({books: [...this.state.books, ...res]})
      });
  };

  render() {
    return (
      <Fragment>
        <Header />
        <div className='container'>
          <h1>Books</h1>
          <DataList data={this.state.books} title={this.state.title} column={['book']}/>
        </div>
      </Fragment>
    )
  }
};

export default Books;
