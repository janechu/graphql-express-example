import { books } from "./server.data.js";

let bookCount = books.length;

// A schema is a collection of type definitions (hence "typeDefs")
// that together define the "shape" of queries that are executed against
// your data.
export const typeDefs = `#graphql
  # Comments in GraphQL strings (such as this one) start with the hash (#) symbol.

  # This "Book" type defines the queryable fields for every book in our data source.
  type Book {
    id: String
    title: String
    author: String
  }

  # The "Query" type is special: it lists all of the available queries that
  # clients can execute, along with the return type for each. In this
  # case, the "books" query returns an array of zero or more Books (defined above).
  type Query {
    books(author: String): [Book]
  }

  # The "Mutation" type for write operations
  type Mutation {
    addBook(title: String, author: String): Book
  }
`;


// Resolvers define how to fetch the types defined in your schema.
// This resolver retrieves books from the "books" array above.
export const resolvers = {
    Query: {
        books: (parent, args, contextValue, info) => {
          if (args.author) {
            return books.filter((book) => book.author.includes(args.author));
          }
          
          return books;
        },
    },
    Mutation: {
        addBook: (parent, args, contextValue, info) => {
          const newBook = {
            id: `uuid-${bookCount}`,
            title: args.title,
            author: args.author,
          }

          bookCount++;

          books.push(newBook);
          return newBook;
        }
    }
};