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

  React.useEffect(() => {
    if (error satisfies string) {
      setStrError(error as string);
    } else if (error satisfies CustomErrorType) {
      setCustomErrors(error as CustomErrorType);
    } else if (error satisfies CombinedError) {
      setCombinedErr(error as CombinedError)
    }
  }, [error]);

  console.log(combinedErr)
  console.log({error})

  return (
    <React.Fragment>
      {customErrors ? (
        <TransitionAlert duration={7000} variant="error">
          {customErrors.nonFieldErrors[0].message}
        </TransitionAlert>
      ) : strError ? (
        <TransitionAlert duration={7000} variant="error">
          {strError}
        </TransitionAlert>
      ) : combinedErr ? (
        <TransitionAlert duration={7000} variant="error">
          {combinedErr.graphQLErrors[0].message}
        </TransitionAlert>
      ) : null}
    </React.Fragment>
  );
}
