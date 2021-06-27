import Header from "./components/Header";
import Todo from "./components/Todo";
import Greeting from "./components/Greeting";
import Meme from "./components/Meme";
import ClassBased from './components/ClassBased'

// function App() {
//   return (
//     <>
//       <Header />
//       <Greeting />
//       <Todo />
//       <Meme />
//     </>
//   );
// }

import React, { Component } from "react";

class App extends Component {
  render() {
    const tolu = () => {
      console.log('tolu')
    }
    tolu()
    return (
      <div>
        <Header />
        <Greeting />
        <ClassBased />
        <Todo />
        <Meme />
      </div>
    );
  }
}

export default App;
