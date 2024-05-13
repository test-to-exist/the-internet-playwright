import { expect, Locator, Page } from '@playwright/test';

export class MainPage {
  readonly page: Page;
  readonly abTestLink: Locator;
  readonly addRemoveElementsLink: Locator;
  readonly inputsLink: Locator;
  readonly brokenImagesLink: Locator;
  readonly checkboxesLink: Locator;

  constructor(page: Page) {
    this.page = page;
    this.abTestLink = page.getByRole('link', { name: 'A/B Testing' });
    this.addRemoveElementsLink = page.getByRole('link', { name: 'Add/Remove Elements' });
    this.inputsLink = page.getByRole('link', { name: 'Inputs' });
    this.brokenImagesLink = page.getByRole('link', { name: 'Broken Images' }); 
    this.checkboxesLink = page.getByRole('link', { name: 'Checkboxes' }); 
  }

  async abTest() {
    await this.abTestLink.click();
  }

  async addRemoveElements() {
    await this.addRemoveElementsLink.click();
  }

  async inputs() {
    await this.inputsLink.click();
  }

  async brokenImages() {
    await this.brokenImagesLink.click();
  }

  async checkboxes() {
    await this.checkboxesLink.click();
  }
}
