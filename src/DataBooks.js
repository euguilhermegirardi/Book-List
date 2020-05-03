import React from 'react';

const DataBook = props => {
  const book = props.data.map((line, index) => {
    return (
      <tr key= { index }>
        <td>{line.book}</td>
      </tr>
    )
  });

  return (
    <table className='centered highlight'>
      <tbody>{ book }</tbody>
    </table>
  );
};

export default DataBook;
