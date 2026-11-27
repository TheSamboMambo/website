import React from 'react';

/**
 * Neo-brutalist button with hard border and offset shadow.
 * Supports variants: 'lavender' | 'mint' | 'dark' | 'neutral'
 */
export function Button({
  children,
  variant = 'neutral',
  size = 'md',
  fullWidth = false,
  className = '',
  as = 'button',
  ...props
}) {
  const classes = [
    'nb-btn',
    variant !== 'neutral' ? `nb-btn--${variant}` : '',
    size === 'lg' ? 'nb-btn--lg' : '',
    fullWidth ? 'nb-btn--full' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  const Component = as;
  return (
    <Component className={classes} {...props}>
      {children}
    </Component>
  );
}
