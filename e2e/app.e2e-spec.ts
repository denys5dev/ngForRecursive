import { browser, element, by } from 'protractor';

describe("Tree list app", () => {
  beforeEach(() => {
    browser.get('/');
  })

  it('should have titile', () => {
    let header = by.css('h1');
    let title = element(header).getText();
    expect(title).toBe('Hello Angular')
  })

  it('should have list', () => {
    let list = by.css('ul');
    let listElement = element(list).isPresent();

    expect(listElement).toBeTruthy();
  })

  it('should have 8 nodes', () => {
    let total  = 8;
    let item = by.css('li');
    let nodes = element.all(item);

    expect(nodes.count()).toBe(total);
  })
})
