import * as React from "react";
import { DisplayBooks } from "../display-books";
import { AddBook, Book } from "../add-book";

export function App() {
    return (
        <div>
            <h2>Available Books:</h2>
            <DisplayBooks />
            <h2>Add a book</h2>
            <AddBook />
        </div>
    );
}