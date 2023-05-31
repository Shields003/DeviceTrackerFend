import React from 'react';

const DataBox = ({ title, value }) => {
  return (
    <div className="data-box" style={{ margin: '1rem', padding: '1rem', border: '1px solid #ccc', borderRadius: '4px' }}>
      <h3>{title}</h3>
      <p>{value}</p>
    </div>
  );
};

export default DataBox;
