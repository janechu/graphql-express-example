import * as React from "react";
import { createRoot } from "react-dom/client";
import { App } from "./components/app";

/**
 * Create the root node
 */
const root: HTMLElement = document.getElementById("root") as HTMLElement;

/**
 * Primary render function for app. Called on store updates
 */
const reactRoot = createRoot(root);
reactRoot.render(
    <App />
);
