import React from 'react';
import './FeatureDisabled.css';

function FeatureDisabled() {
  return (
    <div className="feature-disabled-container">
      <h1 className="feature-disabled-title">🚫 Feature Disabled</h1>
      <p className="feature-disabled-message">
        The feature you're trying to access is currently unavailable. Please contact the administrator or try again later.
      </p>
      <a href="/" className="feature-disabled-home-link">
        Return to Home
      </a>
    </div>
  );
}

export default FeatureDisabled;
