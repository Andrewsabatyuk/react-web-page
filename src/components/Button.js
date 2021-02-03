import React from 'react';
import './Button.css';

const STYLES = ['btn--primary', 'btn==outline'];
const SIZES = ['btn--medium', 'btn--large'];

export const Button = ({
  children,
  type,
  onClick,
  buttonStyle,
  ButtonSize
}) => {
  const checkButtonstyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0]

  const checkButtonSize = SIZES.includes(ButtonSize) ? ButtonSize : SIZES[0];
  return(
    <a href='#' className="btn-mobile">
      <button className={`btn ${checkButtonstyle} ${checkButtonSize}`}
      onClick={onClick} type={type}>
        {children}
      </button>
    </a>
  )
};