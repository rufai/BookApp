import logo from './logo.svg';
import './App.css';
import Book from './components/Book';
import bookList from './model/books.json'
import PropTypes from 'prop-types';
import BookList from './components/BookList';
import { useState } from 'react';


function App() {

  function helpMeCollect(data){
    console.log(data)
  }
  const books = bookList;
  const [input, setInput] = useState("")
  
  const previewSearch = (event)  => {
    // setInput()
    console.log(event.target.value)
    setInput(event.target.value)
  }

  books.map(bookItem => <Book book={bookItem} /> )
  return (
    <section className="App">
      <input id='search' name='search' type="search" placeholder='search for books' onChange={(e) => previewSearch(e)}/>
      <BookList color="orange" genre="romance" setHelpMeCollect={helpMeCollect}>    

            <h1>My Books {input}</h1>
            {books.map(bookItem => <Book book={bookItem} /> )}
   
  
      </BookList>
    </section>
  );
}

export default App;
