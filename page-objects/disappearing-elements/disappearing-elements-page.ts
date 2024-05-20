import { Locator, Page } from '@playwright/test';

export class DisappearingElementsPage {
  readonly page: Page;
  readonly homeButton: Locator;
  readonly aboutButton: Locator;
  readonly contactUsButton: Locator;
  readonly portfolioButton: Locator;
  readonly galleryButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.homeButton = page.getByRole('link', {name: 'Home'});
    this.aboutButton = page.getByRole('link', {name: 'About'});
    this.contactUsButton = page.getByRole('link', {name: 'Contact us'});
    this.portfolioButton = page.getByRole('link', {name: 'Portfolio'});
    this.galleryButton = page.getByRole('link', {name: 'Gallery'});
  }
}
