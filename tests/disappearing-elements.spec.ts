import { DisappearingElementsPage as DisappearingElementsPage } from "@pages/disappearing-elements/disappearing-elements-page";
import { MainPage } from "@pages/main-page";
import { test as base, expect } from "@playwright/test";

const test = base.extend<{dissappearringElementsPage: DisappearingElementsPage}>({
    dissappearringElementsPage: async ({page}, use) => {
        await page.goto(process.env.BASE_URL);
        const mainPage = new MainPage(page);
        const dissappearringElementsPage = await mainPage.dissappearringElements();
        use(dissappearringElementsPage);
    }
})

test('User is redirected to home page after clicking "Home" link',
 async ({dissappearringElementsPage}) => {
    await dissappearringElementsPage.homeButton.click();
    await expect(
        dissappearringElementsPage.page.getByRole('heading', {name: 'Welcome to the-internet'}))
        .toBeVisible();
})

test('User is redirected to "Not found" page after clicking "About" link',
 async ({dissappearringElementsPage}) => {
    await dissappearringElementsPage.aboutButton.click();
    await expect(
        dissappearringElementsPage.page.getByRole('heading', {name: 'Not Found'}))
        .toBeVisible();
})


test('User is redirected to "Not found" page after clicking "Contact us" link',
 async ({dissappearringElementsPage}) => {
    await dissappearringElementsPage.contactUsButton.click();
    await expect(
        dissappearringElementsPage.page.getByRole('heading', {name: 'Not Found'}))
        .toBeVisible();
})

test('User is redirected to "Not found" page after clicking "Portfolio" link',
 async ({dissappearringElementsPage}) => {
    await dissappearringElementsPage.portfolioButton.click();
    await expect(
        dissappearringElementsPage.page.getByRole('heading', {name: 'Not Found'}))
        .toBeVisible();
})

test('User is redirected to "Not found" page after clicking "Gallery" link',
 async ({dissappearringElementsPage}) => {
    await dissappearringElementsPage.galleryButton.click();
    await expect(
        dissappearringElementsPage.page.getByRole('heading', {name: 'Not Found'}))
        .toBeVisible();
})