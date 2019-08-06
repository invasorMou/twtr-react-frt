import React, {Component} from 'react';
import Tweets from './components/Tweets';
import './App.css';

function App() {

  const tweetsData = [
    {
      id: 1,
      username: '@mou',
      time: '20 minutes',
      body: 'this is a tweet',
      admin: true
    }, {
      id: 2,
      username: '@andres',
      time: '14 minutes',
      body: 'this is a tweet by andres'
    }, {
      id: 3,
      username: '@david',
      time: '8 minutes',
      body: 'this is a tweet by david'
    }, {
      id: 4,
      username: '@luis',
      time: '4 minutes',
      body: 'this is a tweet by luis'
    }, {
      id: 5,
      username: '@jeb',
      time: '2 minutes',
      body: 'this is a tweet by jeb'
    }
  ]

  // const tweets = []
  // for (var i = 0; i < tweetsData.length; i++) {
  //   tweets.push(<Tweet key={i} userName={tweetsData[i].username} body={tweetsData[i].body}/>)
  // }

  return (<div className="twt-container">
    <div className="twt-header">
      <span>TWEETS</span>
      <span className="twt-btn">
        New Tweet
      </span>
    </div>

    <Tweets tweetsInfo={tweetsData}/>

  </div>)
}

export default App;
