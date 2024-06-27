import React from 'react';

function BannerSad({ answer, children }) {
  return (
    <div className="sad banner">
      <p>Sorry, the correct answer is <strong>{answer}</strong>.</p>
      { children }
    </div>
  );
}

export default BannerSad;
