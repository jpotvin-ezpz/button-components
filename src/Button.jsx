/* eslint-disable react/prop-types */
import React from 'react';

function Button({
  variant = '',
  disabledShadow = false,
  disabled = false,
  startIcon = '',
  endIcon = '',
  icon = '',
  size = 'md',
  color = '',
  innerText = 'Click Me',
}) {
  let matIcon;
  const classes = `${variant} ${size} ${color} ${disabledShadow ? 'disabledShadow' : ''} ${icon}`;
  switch (icon) {
    case 'favorite':
      matIcon = 'favorite';
      break;
    case 'article':
      matIcon = 'article';
      break;
    case 'bookmark':
      matIcon = 'bookmark';
      break;
    case 'explore':
      matIcon = 'explore';
      break;
    default:
      matIcon = 'add_shopping_cart';
  }

  return (
    <button
      disabled={disabled}
      className={classes}
      type="button"
    >
      {startIcon && (
      <span className="material-icons">
        {matIcon}
      </span>
      )}
      {innerText}
      {endIcon && (
      <span className="material-icons">
        {matIcon}
      </span>
      )}
    </button>
  );
}

export default Button;
