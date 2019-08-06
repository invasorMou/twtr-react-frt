import React from 'react';
import Tweet from './Tweet';

function Tweets(props) {
  return (<div className="">
    {
      props.tweetsInfo.map(function(tweet) {
        return <Tweet key={tweet.id} {...tweet}/>
      })
    }
  </div>)
}

export default Tweets;
