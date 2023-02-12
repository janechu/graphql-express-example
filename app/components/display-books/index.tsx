import * as React from "react";
import { useQuery, gql } from "@apollo/client";
import { ChooseAuthor } from "../choose-author";

const GET_BOOKS = gql`
    query GetBooks($author: String) {
        books(author: $author) {
            id
            title
            author
        }
    }
`;

export function DisplayBooks() {
    const { loading, error, data, refetch } = useQuery(GET_BOOKS);
    
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error : {error.message}</p>;

    function handleAuthorOnChange(updatedAuthor: string) {
        refetch({ author: updatedAuthor });
    }

    function handleShowAllBooks() {
        refetch({ author: undefined });
    }

    return (
        <div>
            <button onClick={handleShowAllBooks}>Show all books</button>
            <ChooseAuthor onChange={handleAuthorOnChange} />
            {data.books.map(({ id, title, author }) => (
                <div key={id}>
                    <h3>{title}</h3>
                    <h4>{author}</h4>
                    <br />
                </div>
            ))}
        </div>
    );
}