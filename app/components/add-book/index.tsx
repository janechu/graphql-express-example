import * as React from "react";
import { gql, useMutation } from "@apollo/client";

const ADD_BOOK = gql`
    mutation AddBook($title: String, $author: String) {
        addBook(title: $title, author: $author) {
            id
            title
            author
        }
    }
`;

export interface Book {
    author: string;
    title: string;
}

export function AddBook() {
    let title: string = "";
    let author: string = "";

    const [addBook, { loading, error, data }] = useMutation(ADD_BOOK);

    if (loading) return 'Submitting...';
    if (error) return `Submission error! ${error.message}`;

    function handleAddBook() {
        addBook({ variables: { title, author }});
    }

    function handleTitleOnChange(e: React.ChangeEvent<HTMLInputElement>) {
        title = e.target.value;
    }

    function handleAuthorOnChange(e: React.ChangeEvent<HTMLInputElement>) {
        author = e.target.value;
    }

    return (
        <div>
            <label htmlFor={"newTitle"}>Title</label>
            <input id={"newTitle"} type={"text"} onChange={handleTitleOnChange} />
            <label htmlFor={"newAuthor"}>Author</label>
            <input id={"newAuthor"} type={"text"} onChange={handleAuthorOnChange} />
            <button onClick={handleAddBook}>Add book</button>
        </div>
    );
}