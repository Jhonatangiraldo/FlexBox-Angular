import { FlexBoxPage } from './app.po';

describe('flex-box App', () => {
  let page: FlexBoxPage;

  beforeEach(() => {
    page = new FlexBoxPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
