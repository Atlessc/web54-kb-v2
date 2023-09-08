import React, { useState, useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { JellyTriangle } from '@uiball/loaders';


const Loading = () => {
  const { isLoading } = useAuth0();
  const [showLoading, setShowLoading] = useState(false);

  useEffect(() => {
    if (isLoading) {
      const timeout = setTimeout(() => setShowLoading(true), 500);
      return () => clearTimeout(timeout);
    }
    setShowLoading(false);
  }, [isLoading]);

  if (!showLoading) {
    return null;
  }

  return (
    <div className="loading">
      <JellyTriangle
        size={100}
        speed={1.2}
        color="#ff6f00"
        duration={12}
      />
    </div>
  );
};

export default Loading;

