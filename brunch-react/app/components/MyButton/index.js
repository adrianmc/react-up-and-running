/* eslint-disable react/prop-types */
import React from 'react';
import style from './style.css';

const Component = (props) =>
  <button
    onClick={props.onClick}
    className={style.myButton}
  >
    {props.children}
  </button>;

Component.defaultProps = {
  children: 'hello there',
  onClick: () => console.log('clicked!'), // eslint-disable-line no-console
};

export default Component;
