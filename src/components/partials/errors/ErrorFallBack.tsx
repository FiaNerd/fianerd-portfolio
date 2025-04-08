import { FallbackProps } from 'react-error-boundary';

const ErrorFallback = ({ error, resetErrorBoundary }: FallbackProps) => {
  return (
    <div role="alert px-4 max-w-2xl mx-auto mt-4">
      <p>Something went wrong:</p>
      <pre>{error.message}</pre>
      <button onClick={resetErrorBoundary}>Try again</button>
    </div>
  );
};

export default ErrorFallback;
