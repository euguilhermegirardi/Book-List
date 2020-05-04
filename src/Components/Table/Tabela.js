import React, { Component } from 'react';

const TableHead = () => {
  return (
    <thead>
      <tr>
        <th>Author</th>
        <th>Book</th>
        <th>Price</th>
        <th>Remove</th>
      </tr>
    </thead>
  );
};

const TableBody = props => {
    const lines = props.authors.map((line) => {
      return (
        <tr key={line.id}>
          <td>{line.name}</td>
          <td>{line.book}</td>
          <td>{line.price}</td>
          <td><button onClick = { () => { props.removeAuthor(line.id) }} className="btn waves-effect waves-light indigo darken-2">Remove</button></td>
        </tr>
      );
    });

    return (
      <tbody>
        { lines }
      </tbody>
    );
};

class Tabela extends Component {
  render() {
    const { authors, removeAuthor } = this.props;

    return (
      <table className="centered highlight">
        <TableHead />
        <TableBody authors = { authors } removeAuthor = { removeAuthor }/>
      </table>
    );
  }
};

export default Tabela;
