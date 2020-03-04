import React from 'react';
import './UrlContainer.css';
import { connect } from 'react-redux';
import { setUrls } from '../../actions';

export const UrlContainer = (props) => {
  const urlEls = props.urls.map(url => {
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

export const mapStateToProps = ({ urls }) => ({
  urls
});

export default connect(mapStateToProps)(UrlContainer);
