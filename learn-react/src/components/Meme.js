import React from "react";
import Joke from "./Joke";
import joke from "../jokeData";

function Meme() {
  const jokeComponents = joke.map((jokes) => {
    return <Joke question={jokes.question} answer={jokes.answer} key={jokes.id} />;
  });
  return (
    <div>
        {jokeComponents}
    </div>
  );
}

export default Meme;
