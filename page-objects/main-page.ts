import { expect, Locator, Page } from "@playwright/test";

export class MainPage {
  readonly page: Page;
  readonly abTestLink: Locator;
  readonly addRemoveElementsLink: Locator;

  constructor(page: Page) {
    this.page = page;
    this.abTestLink = page.locator("a[href='/abtest']");
    this.addRemoveElementsLink = page.locator("a[href='/add_remove_elements/']");
  }

  async abTest() {
    await this.abTestLink.click();
  }

  async addRemoveElements() {
    await this.addRemoveElementsLink.click();
  }
}
