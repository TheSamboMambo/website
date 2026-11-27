import React from 'react';

/**
 * Neo-brutalist bordered content card with optional section tag.
 */
export function Card({
  label,
  labelTone = 'neutral',
  flat = false,
  children,
  className = '',
  as = 'section',
  ...props
}) {
  const Component = as;
  const cardClass = ['nb-card', flat ? 'nb-card--flat' : '', className]
    .filter(Boolean)
    .join(' ');
  const labelClass = [
    'nb-card__label',
    labelTone !== 'neutral' ? `nb-card__label--${labelTone}` : '',
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <Component className={cardClass} {...props}>
      {label ? <span className={labelClass}>{label}</span> : null}
      {children}
    </Component>
  );
}
