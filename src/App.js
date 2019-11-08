import React from 'react';
import Tweets from './components/Tweets';
import './App.css';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      tweetsData: [],
      email: '',
      password: '',
      userAuthenticated: false
    }
  }

  componentDidMount(){
    this.getTweets();
    this.checkAuth();
  }

  checkAuth = () => {
    const status = localStorage.getItem('userAuthenticated')
    if (status === 'true') {
      this.setState({userAuthenticated: true})
    }
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

    fetch('http://localhost:3001/api_sessions', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({email: this.state.email, password: this.state.password})
    }).then(response => {
      console.log(response);
      if (response.status !== 200) {
        return
      }
      return response.json();
    }).then((message)=>{
      console.log(message);
      const status = message ? true : false
      if (status) {
        localStorage.setItem('userAuthenticated',true)
        this.setState({userAuthenticated: status})
      }
    }).catch(err=>{
      console.log('Something went wrong with the request');
      console.log(err);
    })
  }

  render() {
    return (<div className="twt-container">

      <div className="twt-header">

        {this.state.userAuthenticated ?
          (
            <p>Welcome</p>
          )
          :
          (<form id="login" onSubmit={this.handleSubmit}>
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
          </form>)
        }

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
