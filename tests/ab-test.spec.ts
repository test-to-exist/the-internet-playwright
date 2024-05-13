import { expect, test } from '@playwright/test';
import { ABTestPage } from '@pages/ab-test-page';
import { MainPage } from '@pages/main-page';

test.beforeEach(async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com');
  const mainPage = new MainPage(page);
  await mainPage.abTest();
});

test.describe('AB Test', () => {
  test('User should be able to go to the AB test site', async ({ page }) => {
    const aBTestPage = new ABTestPage(page);
    await expect(aBTestPage.abTestHeading).toContainText('A/B Test');
    await expect(aBTestPage.abTestParagraph).toHaveText(
      'Also known as split testing. This is a way in which businesses are able to simultaneously test and learn different versions of a page to see which text and/or functionality works best towards a desired outcome (e.g. a user action such as a click-through).',
    );
  });
});
