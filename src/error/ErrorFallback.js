import { Button } from "carbon-components-react";
import "./error.scss";
import { Error16 } from "@carbon/icons-react";

function ErrorFallback({ error, resetErrorBoundary }) {
  debugger;
  return (
    <div role="alert" className="error-page">
      <div className="bx--grid">
        <div className="bx--row">
          <div className="bx--col">
            {error.response ? (
              <div>
                <div className="bx--row bottom-space">
                  <h1>{error.response.status}</h1>
                </div>
                <div className="bx--row bottom-space">
                  <h2>{error.response.statusText}</h2>
                </div>
                <div className="bx--row bottom-space">
                  <h4>{error.response.data.fault.faultstring}</h4>
                </div>
                <div className="bx--row bottom-space">
                  <pre>{error.message}</pre>
                </div>
                <div className="bx--row bottom-space">
                  <Button onClick={resetErrorBoundary}>Try again</Button>
                </div>
              </div>
            ) : (
              <div className="bx--row bottom-space error-description">
                Unknown Error
              </div>
            )}
          </div>
          <div className="bx--col">
            <Error16 className="my-custom-class" width="200" height="200" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ErrorFallback;
