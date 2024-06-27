import React from 'react';

function BannerHappy({ counter, children }) {
  return (
    <div className="happy banner">
      <p>
        <strong>Congratulations!</strong> Got it in
        <strong> {counter} {counter >= 2 ? 'guesses' : 'guess'}</strong>.
      </p>
      {children}
    </div>
  );
}

export default BannerHappy;
