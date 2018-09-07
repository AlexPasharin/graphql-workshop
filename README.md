# Graphql workshop
Introduction to Graphql, a query language for managing APIs.
Demonstration with a Node.js server-side app and React client-side app.

Date: 07/09/2018

Requirements: Node v8.5

Technology:
- Node.js
- Express
- Graphql
- React

# Project structure
```
- server/ - server side app, with the Graphql schema, query logic and mock data
- client/ - client side app, with Apollo Graphql client consuming the server-side app data
```

# Quick start
## Server-side
### Main scripts
Move to server-side folder.<br/>
From the terminal run<br/>
``` npm install ``` to install dependencies,<br/>
``` npm start ``` to start project at port 3003.<br/>
Open ```http://localhost:3003/graphql``` in your favourite browser to interact with the Graphql interface.

### Sample query
Get all books
```
{
  books {
    id
    title
    genre
    price
  }
}
```
Get the book with id=1
```
{
  book(id: 1) {
    id
    title
    genre
    price
  }
}
```

## Client-side
Navigate to client-subfolder<br/>
From the terminal<br/>
``` npm install ``` to install dependencies<br/>
``` npm start ``` to start project at port 3000.<br/>

