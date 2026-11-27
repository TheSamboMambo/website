import React from 'react';

/**
 * Crisp 2px horizontal rule matching the neo-brutalist border system.
 */
export function Divider({ className = '' }) {
  return <hr className={`nb-divider ${className}`.trim()} />;
}
