import React, { ReactNode } from "react";
import { useMoviesStore } from "../../providers/RootStoreProvider";
import { observer } from "mobx-react-lite";

interface ErrorBoundaryProps {
  children: ReactNode;
}

const ErrorBoundary: React.FC<ErrorBoundaryProps> = observer(({ children }) => {
  const { error } = useMoviesStore();

  if (error) {
    return <div className="wrapper">Something went wrong!</div>;
  }

  return <>{children}</>;
});

export default ErrorBoundary;
