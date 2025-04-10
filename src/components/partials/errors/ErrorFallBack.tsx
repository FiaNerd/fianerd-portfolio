import useHeaderHeight from '../../../hook/useHeaderHeight';

const ErrorFallback = ({
  error,
  resetErrorBoundary,
}: {
  error: Error;
  resetErrorBoundary: () => void;
}) => {
  console.error('Error caught by ErrorBoundary:', error);

  const { headerHeight } = useHeaderHeight();

  return (
    <div
      role="alert"
      className="max-w-screen-xl p-4 bg-red-100 text-red-800"
      style={{ marginTop: headerHeight }}
    >
      <h2>Something went wrong:</h2>
      <pre
        className="text-sm whitespace-pre-wrap"
        style={{ whiteSpace: 'pre-wrap' }}
      >
        {error.message}
      </pre>
      <button
        onClick={resetErrorBoundary}
        className="mt-4 px-4 py-2 bg-red-500 text-white rounded"
      >
        Try Again
      </button>
    </div>
  );
};

export default ErrorFallback;
