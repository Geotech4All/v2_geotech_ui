import React from "react";
import TransitionAlert from "./TransitionAlert";
import { CombinedError } from "urql";

interface ErrorAlertProps {
  error: any;
}

interface CustomErrorType {
  nonFieldErrors: {
    code: string;
    message: string;
  }[];
}

export default function ErrorAlert(props: ErrorAlertProps) {
  const { error } = props;
  const [customErrors, setCustomErrors] = React.useState<CustomErrorType>();
  const [strError, setStrError] = React.useState<string>();
  const [combinedErr, setCombinedErr] = React.useState<CombinedError>();
  const errorDuration = 20000;

  React.useEffect(() => {
    if (typeof error === "string") {
      setStrError(error as string);
    } else if (error satisfies CustomErrorType) {
      setCustomErrors(error as CustomErrorType);
    } else if (error satisfies CombinedError) {
      setCombinedErr(error as CombinedError);
    }
  }, [error]);

  return (
    <React.Fragment>
      {customErrors
        ? (
          <TransitionAlert duration={errorDuration} variant="error">
            {JSON.stringify(customErrors.nonFieldErrors[0].message)}
          </TransitionAlert>
        )
        : strError
        ? (
          <TransitionAlert duration={errorDuration} variant="error">
            {JSON.stringify(strError)}
          </TransitionAlert>
        )
        : combinedErr
        ? (
          <TransitionAlert duration={errorDuration} variant="error">
            {JSON.stringify(combinedErr.graphQLErrors[0].message)}
          </TransitionAlert>
        )
        : null}
    </React.Fragment>
  );
}
