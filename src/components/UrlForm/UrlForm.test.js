import React from 'react';
import ReactDOM from 'react-dom';
import { UrlForm }  from './UrlForm';
import { shallow } from 'enzyme';
import { setUrls } from '../../actions/index';

describe('UrlForm', () => {
  let wrapper, mockState, mockProps, mockEvent;

  beforeEach(() => {
    mockEvent = {
      target: {
        name: 'title',
        value: 'fake value'
      },
      preventDefault: jest.fn()
    }
    mockState = {
      title: '',
      urlToShorten: ''
    }
    mockProps = {
      setUrls: jest.fn(),
      urlToShorten: jest.fn()
    }
    wrapper = shallow(<UrlForm
      {...mockProps}
      />);
  })

  it ('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  });

  it('should start off with a default state', () => {
    const expectedState = {
      title: '',
      urlToShorten: ''
    }
    expect(wrapper.state()).toEqual(expectedState)
  })

  it('should update state when handleNameChange', () => {
    expect(wrapper.state('title')).toEqual('')
    wrapper.instance().handleNameChange(mockEvent)
    expect(wrapper.state('title')).toEqual('fake value')
  })

  it('should call makeFetchRequest and clearInputs when handleSubmitn is invoked', () => {
    wrapper.instance().clearInputs = jest.fn()
    const mockState = {
      title: 'mockTitle',
      urlToShorten: 'mockUrlToShorten'
    }
    const mockResponse = {
      id: 2,
      long_url: "https://images.unsplash.com/photo...",
      short_url: "http://localhost:3001/useshorturl/2",
      title: 'Awesome photo'
    }
    wrapper.instance().makeFetchRequest = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: true,
        json: () => Promise.resolve(mockResponse)
      });
    });
    wrapper.instance().handleSubmit(mockEvent)
    expect(wrapper.instance().makeFetchRequest).toHaveBeenCalled()
    expect(wrapper.instance().clearInputs).toHaveBeenCalled()
  })

  it('should clear inputs from state when clearInputs is invoked', () => {
    wrapper.instance().setState({ title: 'mockTitle', urlToShorten: 'mocklongURL' })
    wrapper.instance().clearInputs()
    expect(wrapper.state('title')).toEqual('')
    expect(wrapper.state('urlToShorten')).toEqual('')
  })

});
