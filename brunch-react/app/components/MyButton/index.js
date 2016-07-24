/* eslint-disable react/prop-types */
import React from 'react';

const Component = (props) =>
  <button onClick={props.onClick}>{props.children}</button>;

Component.defaultProps = {
  children: 'hello there',
  onClick: () => console.log('clicked!'), // eslint-disable-line no-console
};

export default Component;
