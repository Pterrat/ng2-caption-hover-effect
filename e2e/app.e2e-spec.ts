import { Ng2CaptaionHoverEffectPage } from './app.po';

describe('ng2-captaion-hover-effect App', () => {
  let page: Ng2CaptaionHoverEffectPage;

  beforeEach(() => {
    page = new Ng2CaptaionHoverEffectPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
