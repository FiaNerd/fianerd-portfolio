import React from "react";
import { FallbackProps } from "react-error-boundary";

const ErrorFallback: React.FC<FallbackProps> = ({
  error,
  resetErrorBoundary,
}) => {
  return (
    <div className="error-boundary-fallback-wrapper mt-[7em]">
      {/* <ErrorFallbackIcon /> */}
      <h1>Something went wrong</h1>
      <p>{error.message}</p>
      <button onClick={resetErrorBoundary}>Home</button>
    </div>
  );
};

export default ErrorFallback;
