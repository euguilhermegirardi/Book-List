import React from 'react';

const DataAuthor = props => {
  const name = props.data.map((line, index) => {
    return (
      <tr key= { index }>
        <td>{line.name}</td>
      </tr>
    )
  });

  return (
    <table className='centered highlight'>
      <tbody>{ name }</tbody>
    </table>
  );
};

export default DataAuthor;
