import React from 'react';
import timeSince from '../tools/TimeSince';

function Tweet(props) {
  return (<div className="twt-content">
    <span>
      <b>{props.username}</b>
      <i>{props.time}</i>
    </span>
    <p>
      {props.body}
    </p>
  </div>)
}

export default Tweet;
