import React, { Component, Fragment } from 'react';
import Header from '../../Components/Header/Header';
import DataList from '../../Components/DataList/DataList';
import ApiService from '../../API/ApiService';

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
          <DataList data={this.state.authors} title={this.state.title} column={['name']}/>
        </div>
      </Fragment>
    )
  }
};

export default Author;
