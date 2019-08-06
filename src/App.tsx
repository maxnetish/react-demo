// import logo from './logo.svg';
import './App.css';
import {getFormattedDate} from "./example";
import * as React from 'react';
import {UsersList} from "./users/users-list";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>My demo react app</h1>
      </header>
      <section className="App-content">
        Now is: {getFormattedDate()}
      </section>
      <UsersList/>
      <footer></footer>
    </div>
  );
}

export default App;
