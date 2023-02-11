import * as React from "react";
import { createRoot } from "react-dom/client";
import { App } from "./components/app";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

/**
 * The apollo client
 */
const client = new ApolloClient({
    uri: "http://localhost:4000",
    cache: new InMemoryCache(),
  });

/**
 * Create the root node
 */
const root: HTMLElement = document.getElementById("root") as HTMLElement;

/**
 * Primary render function for app. Called on store updates
 */
const reactRoot = createRoot(root);
reactRoot.render(
    <ApolloProvider client={client}>
        <App />
    </ApolloProvider>
);
