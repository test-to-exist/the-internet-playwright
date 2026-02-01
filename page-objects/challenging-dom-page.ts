import { Locator, Page } from '@playwright/test';

export class ChallengingDomPage {
  readonly page: Page;
  readonly firstButton: Locator;
  readonly secondButton: Locator;
  readonly thirdButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.firstButton = page.locator('a.button').first();
    this.secondButton = page.locator('a.button').nth(1);
    this.thirdButton = page.locator('a.button').nth(2);
  }

  getColumnHeader(name: string) : Locator {
    return this.page.getByRole('columnheader', { name: name});
  }

  getCell(name: string) : Locator {
    return this.page.getByRole('cell', { name: name}).first();
  }
}
