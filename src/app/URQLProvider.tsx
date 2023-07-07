"use client";
import client from "@/graphql/client";
import React from "react";
import { Provider } from "urql";

interface ProviderProps {
    children?: React.ReactNode;
}

export default function URQLProvider(props: ProviderProps) {
    const { children } = props;
    return (
        <Provider value={client}>
            {children}
        </Provider>
    );
}
