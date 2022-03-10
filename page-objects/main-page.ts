import { expect, Locator, Page } from "@playwright/test";

export class MainPage {
  readonly page: Page;
  readonly abTestLink: Locator;
  readonly addRemoveElementsLink: Locator;
  readonly inputsLink: Locator;


  constructor(page: Page) {
    this.page = page;
    this.abTestLink = page.locator("a[href='/abtest']");
    this.addRemoveElementsLink = page.locator("a[href='/add_remove_elements/']");
    this.inputsLink = page.locator("a[href='/inputs']").first();
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
