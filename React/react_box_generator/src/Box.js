
import React from 'react';

const Box = ({ color, size }) => {
  const style = {
    height: size ? `${size}px` : '100px',
    width: size ? `${size}px` : '100px',
    backgroundColor: color,
    margin: '10px',
  };

  return <div style={style} />;
};

export default Box;
