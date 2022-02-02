import logo from './logo.svg';
import './App.css';
import Book from './components/Book';
import bookList from './model/books.json'
import PropTypes from 'prop-types';
import BookList from './components/BookList';
import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import Genre from './components/Genre';

function App() {

  useEffect(() => {
    const term = 'food';
    const url  = `https://www.googleapis.com/books/v1/volumes?q=${term}&filter=paid-ebook
    s&print-type=books&projection=lite`;
    const results =  fetch(url).then(res => res.json());
    console.log(results)
  },[])

  const [name, setName] = useState("")

  const previewName = (e) => {
    setName(e.target.value)
  }

  const previewPassword = (e) => {
    
  }
  function handleSubmit(e){
    e.preventDefault()
    alert('A name was submitted: ' + name);
  }
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
    <Router> 
       <section className="App">
         <ul>
           <li>
             <Link to="/genre"> Genre</Link>
           </li>
           <li>
           <Link to="/author"> Author </Link>
           </li>
           <li>
            <Link to="/price"> Price </Link>
           </li>
           
         </ul>
         <input id='search' name='search' type="search" placeholder='search for books' onChange={(e) => previewSearch(e)}/>

         <form onSubmit={(event) => handleSubmit(event)} >
           <div>
             <label>Username</label>
            <input required id='search' name='search' type="text" placeholder='enter your username' onChange={(e) => previewName(e)}/>
            </div>
           <div>
             <label>Password</label>
            <input required id='search' name='search' type="password" placeholder='enter your password' onChange={(e) => previewPassword(e)}/>
            </div>
            <input type="submit" value="Sign in"/>
          </form>
          <BookList color="orange" genre="romance" setHelpMeCollect={helpMeCollect}>    
              <h1>My Books {input}</h1>
              {books.map(bookItem => <Book book={bookItem} /> )}
          </BookList>
        </section>

    
    </Router>

  );
}

export default App;
