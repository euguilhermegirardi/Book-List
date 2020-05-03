import React, { Component, Fragment } from 'react';
import Header from './Header';
import DataTable from './DataTable';

class Author extends Component {
  constructor(props) {
    super(props);

    this.state = {
      authors: [
        {
          name: 'Paulo',
          book: 'React',
          price: '1000'
        },
        {
          name: 'Daniel',
          book: 'React Native',
          price: '1000'
        },
        {
          name: 'Marcos',
          book: 'Node.js',
          price: '1000'
        },
        {
          name: 'Girardi',
          book: 'CSS + JS',
          price: '999'
        }
      ],
      title: 'Authors'
    };
  };

  render() {
    return (
      <Fragment>
        <Header />
        <div className='container'>
          <h1>Authors</h1>
          <DataTable data={this.state.authors} title={this.state.title} columns={['name']} />
        </div>
      </Fragment>
    )
  }
}

export default Author;
