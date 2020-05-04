import React from 'react';

const DataList = props => {

  let info = props.data.map(item =>
    <tr key={item.id}>
      {props.column.map(column =>
        <td key={`${item.id}${item[column]}`}> {item[column]} </td>
      )}
    </tr>);

  return (
    <table className='centered highlight'>
      <thead>
        <tr>
          <th>{props.title}</th>
        </tr>
      </thead>
      <tbody>
        { info }
      </tbody>
    </table>
  );
};

export default DataList;
