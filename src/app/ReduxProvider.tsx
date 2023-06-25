"use client";
import { store } from "@/redux/config";
import { Provider } from "react-redux";

interface ProviderProps {
  children?: React.ReactNode;
}

export default function ReducProvider(props: ProviderProps) {
  const { children } = props;
  return <Provider store={store}>{children}</Provider>;
}
