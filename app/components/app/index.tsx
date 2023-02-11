import * as React from "react";
import { DisplayBooks } from "../display-books";

interface AppProps {

}

export function App(props: AppProps) {
    return (
        <div>
            <h1>Available Books:</h1>
            <DisplayBooks />
        </div>
    );
}