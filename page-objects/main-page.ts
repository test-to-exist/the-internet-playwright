import { expect, Locator, Page } from '@playwright/test';

export class MainPage {
  readonly page: Page;
  readonly abTestLink: Locator;
  readonly addRemoveElementsLink: Locator;
  readonly inputsLink: Locator;

  constructor(page: Page) {
    this.page = page;
    this.abTestLink = page.getByRole('link', { name: 'A/B Testing' });
    this.addRemoveElementsLink = page.getByRole('link', { name: 'Add/Remove Elements' });
    this.inputsLink = page.getByRole('link', { name: 'Inputs' });
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
}
