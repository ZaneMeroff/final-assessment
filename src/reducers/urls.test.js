import { urls } from './urls'

describe('urls', () => {

  it('should return the initial state if no state is provided', () => {
    const expected = [];
    const result = urls(undefined, {});
    expect(result).toEqual(expected)
  })

  it('should return the correct state if the action type is SET_URLS', () => {
    const mockState = [];
    const mockUrl = [{
        id: 1,
        long_url: "htps://images.unsplash.com/photo-1531898418865-480b7090470f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80",
        short_url: "http://localhost:3001/useshorturl/1",
        title: "Awesome photo"
      }]
    const mockAction = {
      type: 'SET_URLS',
      url: mockUrl
    }
    const expected = [{
        id: 1,
        long_url: "https://images.unsplash.com/photo-1531898418865-480b7090470f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80",
        short_url: "http://localhost:3001/useshorturl/1",
        title: "Awesome photo"
      }]
    const result = urls(mockState, mockAction);
    expect(result).toEqual(expected)
  })

})
