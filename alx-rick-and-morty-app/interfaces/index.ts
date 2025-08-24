import { ReactNode } from "react";


export interface State {
  hasError: boolean;
}

export interface ErrorBoundaryProps {
  children: ReactNode;
}
