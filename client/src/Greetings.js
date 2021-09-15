import React, { Component } from 'react';

import logo from './logo.svg';

import './App.css';

class AppNew extends Component {
  state = {
    response: '',
    post: '',
    responseToPost: '',
    countResponce:''
  };
  
  componentDidMount() {
    this.callApi()
      .then(res => this.setState({ response: res.express }))
      .catch(err => console.log(err));
    setInterval(this.callApi, 1000);
  }
  
  callApi = async () => {
    const response = await fetch('/getcount?meetingid='+this.state.post);
    const body = await response.json();
    if (response.status !== 200) throw Error(body.message);
    this.setState({countResponce:body})
  };
  
  handleSubmit = async e => {
    e.preventDefault();
    const response = await fetch('/savecount', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ MeetingId: this.state.post }),
    });
    const body = await response.text();
    
    this.setState({ responseToPost: body });
  };
  
render() {
    return (
      <div className="AppNew">
        <p>{this.state.response}</p>
        <form onSubmit={this.handleSubmit}>
          <p>
            <strong>MeetingID:</strong>
          </p>
          <input
            type="text"
            value={this.state.post}
            onChange={e => this.setState({ post: e.target.value })}
          />
          <button type="Submit">Submit</button>
        </form>
        <p>{this.state.countResponce}</p>
      </div>
    );
  }
}

export default AppNew;