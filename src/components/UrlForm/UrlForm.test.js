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

  it('handleNameChange', () => {
    expect(wrapper.state('title')).toEqual('')
    wrapper.instance().handleNameChange(mockEvent)
    expect(wrapper.state('title')).toEqual('fake value')
  })
});
