import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setUrls } from '../../actions';

export class UrlForm extends Component {
  constructor() {
    super();
    this.state = {
      title: '',
      urlToShorten: ''
    };
  }

  handleNameChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.setUrls(this.state.urlToShorten)
    this.makeFetchRequest(this.state.urlToShorten, this.state.title)
    this.clearInputs();
  }

  clearInputs = () => {
    this.setState({title: '', urlToShorten: ''});
  }

  makeFetchRequest = (urlToShorten, title) => {
    const options = {
      method: 'POST',
      body: JSON.stringify({long_url: urlToShorten, title: title}),
      headers: {
        'Content-Type': 'application/json'
      }
    }
     fetch('http://localhost:3001/api/v1/urls', options)
      .then(res => {
        if(!res.ok) {
          throw Error('There was an error!')
        }
        return res.json()})
  }

  render() {
    return (
      <form>
        <input
          type='text'
          placeholder='Title...'
          name='title'
          value={this.state.title}
          onChange={e => this.handleNameChange(e)}
        />
        <input
          type='text'
          placeholder='URL to Shorten...'
          name='urlToShorten'
          value={this.state.urlToShorten}
          onChange={e => this.handleNameChange(e)}
        />
        <button onClick={e => this.handleSubmit(e)}>
          Shorten Please!
        </button>
      </form>
    )
  }
}

export const mapDispatchToProps = dispatch => {
  return {
    setUrls: urls => dispatch(setUrls(urls))
  }
};

export default connect(null, mapDispatchToProps)(UrlForm);
