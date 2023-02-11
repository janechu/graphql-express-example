import * as React from "react";
import { useQuery, gql } from '@apollo/client';

const GET_BOOKS = gql`
    query GetBooks {
        books {
            id
            title
            author
        }
    }
`;

export function DisplayBooks() {
    const { loading, error, data } = useQuery(GET_BOOKS);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error : {error.message}</p>;

    return data.books.map(({ id, title, author }) => (
        <div key={id}>
            <h3>{title}</h3>
            <h4>{author}</h4>
            <br />
        </div>
    ));
}