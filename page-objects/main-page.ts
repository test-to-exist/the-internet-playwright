import { expect, Locator, Page } from "@playwright/test";

export class MainPage {
  readonly page: Page;
  readonly abTestLink: Locator;

  constructor(page: Page) {
    this.page = page;
    this.abTestLink = page.locator("a[href='/abtest']");
  }

  async abTest() {
    await this.abTestLink.click();
  }
}
