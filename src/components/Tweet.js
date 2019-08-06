import React from 'react';
import timeSince from '../tools/TimeSince';

function Tweet(props) {
  return (<div className="twt-content">
    <span>
      <b>@{props.user.username}</b>
      <i>
        about {timeSince(new Date(props.created_at))}</i>
    </span>
    <p>
      {props.body}
    </p>
  </div>)
}

export default Tweet;
