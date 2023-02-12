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
    let author = void 0;
    const { loading, error, data, refetch } = useQuery(GET_BOOKS);
    
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error : {error.message}</p>;

    function handleAuthorOnChange(updatedAuthor: string) {
        author = updatedAuthor;
        refetch({ author });
    }

    function handleShowAllBooks() {
        author = void 0;
        refetch({ author });
    }

    function handleRefreshBookList() {
        refetch({ author });
    }

    return (
        <div>
            <button onClick={handleShowAllBooks}>Show all books</button>
            <button onClick={handleRefreshBookList}>Refresh</button>
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