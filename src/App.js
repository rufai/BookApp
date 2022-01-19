import logo from './logo.svg';
import './App.css';
import Book from './components/Book';
import bookList from './model/books.json'
import PropTypes from 'prop-types';

function App() {

  const books = bookList;

  books.map(bookItem => <Book book={bookItem} /> )
  return (
    <div className="App">
        <h1>My Books</h1>
        {books.map(bookItem => <Book book={bookItem} /> )}
       
    </div>
  );
}

export default App;
