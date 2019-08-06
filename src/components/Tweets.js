import React from 'react';
import Tweet from './Tweet';

function Tweets(props) {
  return (<div className="">
    {
      props.tweetsInfo.map(function(tweetInfo) {
        return <Tweet key={tweetInfo.id} {...tweetInfo}/>
      })
    }
  </div>)
}

export default Tweets;
