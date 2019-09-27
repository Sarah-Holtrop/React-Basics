import React from 'react';
import './App.css'

// props can also be just (name, message, likes) broken down from props
function Tweet(props) {
  return (
    // must be className because this is technically javascript, not "real" HTML
    <div className="tweet">
      <h3>{props.name}</h3>
      <p>{props.message}</p>
      <h3>Number of likes</h3>
    </div>
  );
}
export default Tweet;