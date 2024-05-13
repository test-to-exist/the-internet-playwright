import { MainPage } from "@pages/main-page";
import test, { expect } from "@playwright/test";

test.beforeEach(async ({ page }) => {
    await page.goto(process.env.BASE_URL);
    const mainPage = new MainPage(page);
    await mainPage.brokenImages();
  });

test.describe('Broken Images Tests', () => {
    test('The first image on page is broken' , async ({page}) => {
        const images = await page.locator('img').all();
        const resp1 = await page.request.get('https://the-internet.herokuapp.com/broken_images' + images[0].getAttribute('src'));
        const resp2 = await page.request.get('https://the-internet.herokuapp.com/broken_images' + images[1].getAttribute('src'));
        const resp3 = await page.request.get('https://the-internet.herokuapp.com/broken_images' + images[2].getAttribute('src'));
        expect(resp1.status()).toBe(400);
        expect(resp2.status()).toBe(400);
        expect(resp3.status()).toBe(400);
    })
})
  