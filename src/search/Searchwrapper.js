import Search from "./Search";
import { ErrorBoundary } from "react-error-boundary";
import ErrorFallback from "../error/ErrorFallback";
import { errorHandler } from "../error/errorhandler";
import { useState } from "react";
import "./search.scss";

function Searchwrapper(props) {
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
      <Search />
    </ErrorBoundary>
  );
}

export default Searchwrapper;
