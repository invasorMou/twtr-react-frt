import React from 'react';
import Tweets from './components/Tweets';
import './App.css';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      tweetsData: [],
      email: '',
      password: ''
    }
    this.getTweets()
  }

  getTweets = () => {
    const data = fetch('http://localhost:3001/api_tweets')
    data.then(function(response) {
      return response.json();
    }).then((jsonData) => {
      this.setState({tweetsData: jsonData})
    }).catch(function(err) {
      console.log('Something went wrong');
      console.log(err);
    })
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(event.target);
  }

  render() {
    return (<div className="twt-container">

      <div className="twt-header">
        <form id="login" onSubmit={this.handleSubmit}>
          <div>
            <label>Email:</label><br/>
            <input type="email" name="email" onChange={this.handleChange}/>
          </div>
          <div>
            <label>Password:</label><br/>

            <input type="password" name="password" onChange={this.handleChange}/>
          </div>
          <div>
            <input type="submit"/>
          </div>
        </form>
      </div>

      <div className="twt-header">
        <span>TWEETS</span>
        <span className="twt-btn">
          New Tweet
        </span>
      </div>
      <Tweets tweetsInfo={this.state.tweetsData}/>
    </div>)
  }
}

export default App;
