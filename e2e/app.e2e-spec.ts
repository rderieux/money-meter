import { MoneyMeterPage } from './app.po';

describe('money-meter App', function() {
  let page: MoneyMeterPage;

  beforeEach(() => {
    page = new MoneyMeterPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
