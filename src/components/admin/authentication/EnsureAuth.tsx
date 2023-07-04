"use client";
import { useMeQuery } from "@/graphql/generated";
import { useAppDispatch } from "@/redux/hooks";
import { setAdminStaff } from "@/redux/slices/adminSlice";
import React from "react";

interface LayoutProps {
  children?: React.ReactNode;
}

export default function EnsureAuth(props: LayoutProps) {
  const { children } = props;
  const [{ data }, refetch] = useMeQuery();
  const dispatch = useAppDispatch();

  React.useEffect(() => {
    if (data?.me) {
      dispatch(setAdminStaff(data.me));
    }
  }, [data])

  React.useEffect(() => {
    const interval = setInterval(async () => {
      refetch({ requestPolicy: "network-only" });
    }, 570000);
    return () => clearInterval(interval);
  }, [refetch]);
  
  return (
    <React.Fragment>
      {children}
    </React.Fragment>
  );
}
