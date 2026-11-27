import React from 'react';

/**
 * Two-part neo-brutalist brand mark with a highlighted pastel block.
 */
export function BrandMark({ prefix, highlight, className = '' }) {
  return (
    <span className={`nb-brand ${className}`.trim()}>
      <span>{prefix}</span>
      {highlight ? <span className="nb-brand__highlight">{highlight}</span> : null}
    </span>
  );
}
