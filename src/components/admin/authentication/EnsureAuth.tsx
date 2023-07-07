"use client";
import React from "react";
import { useMeQuery } from "@/graphql/generated";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { selectAdmin, setAdminStaff } from "@/redux/slices/adminSlice";
import { getTokens } from "@/utils/token";
import { useRouter } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";

interface LayoutProps {
  children?: React.ReactNode;
}

export default function EnsureAuth(props: LayoutProps) {
  const { children } = props;
  const [{ data }, refetch] = useMeQuery();
  const [isAuthenticated, setIsAuthenticated] = React.useState(false);
  const [hasTokens, setHasTokens] = React.useState(false);
  const dispatch = useAppDispatch();
  const router = useRouter();
  const admin = useAppSelector(selectAdmin);

  React.useEffect(() => {
    if (data?.me) {
      setIsAuthenticated(true);
      dispatch(setAdminStaff(data.me));
    }
  }, [data, dispatch]);

  React.useEffect(() => {
    const interval = setInterval(async () => {
      refetch({ requestPolicy: "network-only" });
    }, 300000);
    return () => clearInterval(interval);
  }, [refetch]);

  React.useLayoutEffect(() => {
    getTokens().then((tokens) => {
      if (!tokens || !tokens.refreshToken) {
        router.replace("/admin/signin");
      } else {
        setHasTokens(true);
        if (admin.staff) {
          setIsAuthenticated(true);
        } else {
          refetch({ requestPolicy: "network-only" });
        }
      }
    });
  }, [router, admin.staff, refetch]);

  return (
    <React.Fragment>
      {children}
      <AnimatePresence>
        {(!isAuthenticated || !hasTokens) && (
          <motion.div
            exit={{ opacity: 0 }}
            key={Math.random()}
            className="backdrop-blur-lg z-0 fixed inset-0"
          />
        )}
      </AnimatePresence>
    </React.Fragment>
  );
}
