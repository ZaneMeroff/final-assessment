import React, { Component } from 'react';
import './UrlContainer.css';
import { connect } from 'react-redux';
import { setUrls } from '../../actions';
import { getUrls } from '../../apiCalls';

export class UrlContainer extends Component {

  componentDidMount() {
    getUrls()
      .then(data => this.props.setUrls(data.urls))
      .catch(err => console.error('Error fetching:', err));
  }

  render() {
console.log(this.props.urls)
    const urlEls = this.props.urls.map(url => {
      return (
        <div className="url">
          <h3>{url.title}</h3>
          <a href={url.short_url} target="blank">{url.short_url}</a>
          <p>{url.long_url}</p>
        </div>
      )
    });

    return (
      <section>
        { urlEls.length ? urlEls : <p>No urls yet! Find some to shorten!</p> }
      </section>
    )

  }

}

export const mapStateToProps = ({ urls }) => ({
  urls
});

export const mapDispatchToProps = dispatch => {
  return {
    setUrls: urls => dispatch(setUrls(urls))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(UrlContainer);
