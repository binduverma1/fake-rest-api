import { FakeRestApiPage } from './app.po';

describe('fake-rest-api App', function() {
  let page: FakeRestApiPage;

  beforeEach(() => {
    page = new FakeRestApiPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
