/**
 * Gallery Diff Component
 * 
 * A component that displays a before/after pictures
 */

import React from 'react';

export default function GalleryDiff() {
  return (
    <section id="gallery-diff">
      <figure className="diff aspect-16/9" tabIndex={0}>
        <div className="diff-item-1" role="img" tabIndex={0}>
          <img src="https://placehold.co/600x400/000000/FFFFFF/png" alt="" />
        </div>
        <div className="diff-item-2" role="img">
          <img className='bg-primary' src="https://placehold.co/600x400" alt="" />
        </div>
        <div className="diff-resizer"></div>
      </figure>
    </section>
  );
}
