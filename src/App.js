// component file- holds all html, logic, style-- like vue probably
import React, { useState } from 'react';
import Hello from './sayHello';
import Tweet from './Tweet';

function App() {


  const [isRed, setRed] = useState(false);
  const [count, setCount] = useState(0);

  const [users, setUsers] = useState([
    { name: "Sarah", message: "Hello!" },
    { name: 'Cody', message: 'Hi there!' },
    { name: 'Clair', message: 'Oh hi!' }
  ])

  const increment = () => {
    setCount(count + 1);
    setRed(!isRed);
    // sets it to toggle, isRed -> not isRed -> isRed -> not isRed
  }
  return (
    <div className="app">
      <h4>(this is the App.js component)</h4>
      <h1>Hello React!</h1>
      <Hello />
      <Tweet name="Sarah" message="This is kinda like twitter, huh?" />
      <Tweet name="React" message="I might like react more than vue? " />
      <Tweet name="Hungry" message="Almost noon! Soon time to eat!" />
      <Tweet name="Lunchtime" message="making some udon noodles! Can't wait!" />
      <h1 className={isRed ? 'red' : ""}>Change my color!</h1>
      <button onClick={increment}>Increment</button>
      <h1>{count}</h1>
      {users.map(user => (
        <Tweet name={user.name} message={user.message} />
      ))}
    </div>
  );
}
// React.createElement(div) same thing as ^^
export default App;