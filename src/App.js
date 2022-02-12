import React, { useState } from "react";
import data from "./data";
function App() {
  //set state for the number of paragraphs that you would want to generate (input)
  const [count, setCount] = useState(0);

  //set state for the text which is the array of paragraphs coming from the data
  const [text, setText] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    //the count that you are extracting from the setcount(e.target.value)
    // in the input element is being collected and parsed to become a number
    let amount = parseInt(count);

    //to only extract and display the number of paragraphs from the array
    //that the user is requesting from the input we use slice which takes
    //the start of where you want to slice and the number of items from the array y
    //you want to slice so we input the 'amount' as the number

    //set up coditionals to deal with inputs higher than the number of
    // items and lower than 0

    if (count <= 0) {
      //set amount to 1
      amount = 1;
    }
    if (count > 8) {
      amount = 8;
    }

    setText(data.slice(0, amount));
  };

  return (
    <section className="section-center">
      <h3>Tired of boring lorem ipsum?</h3>
      <form className="lorem-form" onSubmit={handleSubmit}>
        <label htmlFor="amount">paragraphs:</label>
        {/** you set the value if the input to the state value 'count'
         * in order to have a controlled input so as you change the input, you change the state
         * thats how to set your input to be equal to your state*/}
        <input
          type="number"
          name="amount"
          id="amount"
          value={count}
          onChange={(e) => setCount(e.target.value)}
        ></input>
        <button type="submit" className="btn">
          generate
        </button>
      </form>
      {/** this is where we iterate and display the data */}
      <article className="lorem-text">
        {text.map((item, index) => {
          return <p key={index}>{item}</p>;
        })}
      </article>
    </section>
  );
}

export default App;
