import React from 'react';
import { UrlContainer, mapDispatchToProps, mapStateToProps } from './UrlContainer';
import { setUrls } from '../../actions';

describe('mapStateToProps', () => {
  it('should return an object with url information', () => {
    const mockUrl = {
        id: 1,
        long_url: "https://images.unsplash.com/photo-1531898418865-480b7090470f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80",
        short_url: "http://localhost:3001/useshorturl/1",
        title: "Awesome photo"
      }
    const mockState = {urls: mockUrl}
    const expected = {urls: {
        id: 1,
        long_url: "https://images.unsplash.com/photo-1531898418865-480b7090470f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80",
        short_url: "http://localhost:3001/useshorturl/1",
        title: "Awesome photo"
      }}
    const mappedProps = mapStateToProps(mockState);
    expect(mappedProps).toEqual(expected);
  });
});

describe('mapDispatchToProps', () => {
  it('calls dispatch with setUrls when setUrls is called', () => {
    const mockUrl = {
        id: 1,
        long_url: "https://images.unsplash.com/photo-1531898418865-480b7090470f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80",
        short_url: "http://localhost:3001/useshorturl/1",
        title: "Awesome photo"
      }
    const mockDispatch = jest.fn();
    const actionToDispatch = setUrls(mockUrl);
    const mappedProps = mapDispatchToProps(mockDispatch);
    mappedProps.setUrls(mockUrl);
    expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
  });
});
