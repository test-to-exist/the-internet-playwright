import { MainPage } from "@pages/main-page";
import test, { expect } from "@playwright/test";

test.beforeEach(async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com');
    const mainPage = new MainPage(page);
    await mainPage.brokenImages();
  });

test.describe('Broken Images Tests', () => {
    test('The first image on page is broken' , async ({page}) => {
        const images = await page.locator('img').all();
        const resp = await page.request.get('https://the-internet.herokuapp.com/broken_images' + images[0].getAttribute('src'));
        await expect(resp.status()).toBe(400);
    })
})
  