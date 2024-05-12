import { expect, Locator, Page } from '@playwright/test';

export class ABTestPage {
  readonly page: Page;
  readonly abTestLink: Locator;
  readonly abTestHeading: Locator;
  readonly abTestParagraph: Locator;

  constructor(page: Page) {
    this.page = page;
    this.abTestHeading = page.locator('h3');
    this.abTestParagraph = page.locator('p');
  }

  // async pageContents() {
  //   await expect(this.abTestHeading).toContainText("A/B Test");
  //   await expect(this.abTestParagraph).toHaveText(
  //     "Also known as split testing. This is a way in which businesses are able to simultaneously test and learn different versions of a page to see which text and/or functionality works best towards a desired outcome (e.g. a user action such as a click-through)."
  //   );
  // }
}
