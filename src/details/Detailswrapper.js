import ErrorFallback from "../error/ErrorFallback";
import { ErrorBoundary } from "react-error-boundary";
import { errorHandler } from "../error/errorhandler";
import { useState } from "react";
import Details from "./Details";

function Detailswrapper() {
  const [tryAgain, setTryAgin] = useState(false);
  return (
    <ErrorBoundary
      FallbackComponent={ErrorFallback}
      onReset={() => {
        setTryAgin((e) => !e);
      }}
      resetKeys={[tryAgain]}
      onError={errorHandler}
    >
      <Details />
    </ErrorBoundary>
  );
}

export default Detailswrapper;
