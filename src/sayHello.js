import React from 'react'

function Hello() {
  const sayHello = () => {
    console.log("hello");
  };
  return (
    <div>
      {/* onclick = {} allows javascript inside curlies */}
      {/* sayHello() will call it when page renders, just sayHello will call it when clicked */}
      <h4>(this is the sayHello.js component)</h4>
      <button onClick={sayHello}>Say Hello</button>
    </div>
  )
}

export default Hello;