import * as actions from './index';

describe('actions testing', () => {

  it('should have a type of SET_URLS', () => {
    const url = 'www.google.com';
    const expectedAction = {
      type: 'SET_URLS',
      url
    };
    const result = actions.setUrls(url);
    expect(result).toEqual(expectedAction);
  });

  it('should have a type of ADD_URLS', () => {
    const url = 'www.google.com';
    const expectedAction = {
      type: 'ADD_URLS',
      url
    };
    const result = actions.addUrls(url);
    expect(result).toEqual(expectedAction);
  });

});
