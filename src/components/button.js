import React, { Children } from 'react';
import './button.css';
import { Link } from 'react-router-dom';
import { type } from '@testing-library/user-event/dist/type';

const STYLES = ['btn--primary', 'btn--outline'];



export const button = ({
  Children
  type,
  onclick,
  buttonStyle,
  butttonSize
}) => {
  const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0]
}