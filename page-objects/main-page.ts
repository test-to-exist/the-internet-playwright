import { Locator, Page } from '@playwright/test';
import { ABTestPage } from './ab-test-page';
import { CheckboxesPage } from './checkboxes-page';
import { ContextMenuPage } from './context-menu-page';
import { ChallengingDomPage } from './challenging-dom-page';
import { BrokenImagesPage } from './broken-images-page';

export class MainPage {
  readonly page: Page;
  readonly abTestLink: Locator;
  readonly addRemoveElementsLink: Locator;
  readonly inputsLink: Locator;
  readonly brokenImagesLink: Locator;
  readonly checkboxesLink: Locator;
  readonly contextMenuLink: Locator;
  readonly challengingDomLink: Locator;

  constructor(page: Page) {
    this.page = page;
    this.abTestLink = page.getByRole('link', { name: 'A/B Testing' });
    this.addRemoveElementsLink = page.getByRole('link', { name: 'Add/Remove Elements' });
    this.inputsLink = page.getByRole('link', { name: 'Inputs' });
    this.brokenImagesLink = page.getByRole('link', { name: 'Broken Images' }); 
    this.checkboxesLink = page.getByRole('link', { name: 'Checkboxes' }); 
    this.contextMenuLink = page.getByRole('link', { name: 'Context Menu' });
    this.challengingDomLink = page.getByRole('link', {name: 'Challenging DOM'}) 
  }

  async abTest() : Promise<ABTestPage> {
    await this.abTestLink.click();
    return new ABTestPage(this.page);
  }

  async checkboxes() {
    await this.checkboxesLink.click();
    return new CheckboxesPage(this.page);
  }

  async contextMenu() {
    await this.contextMenuLink.click();
    return new ContextMenuPage(this.page);
  }

  async brokenImages() {
    await this.brokenImagesLink.click();
    return new BrokenImagesPage(this.page);
  }
  
  async challengingDom() {
    await this.challengingDomLink.click();
    return new ChallengingDomPage(this.page);
  }
}
