import React from 'react';

const Component = (props) =>
  <button onClick={props.onClick}>{props.children}</button>

Component.defaultProps = {
  children: 'hello there',
  onClick: () => console.log('clicked!'),
};

export default Component;