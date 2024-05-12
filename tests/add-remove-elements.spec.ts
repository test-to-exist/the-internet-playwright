import { expect, test } from '@playwright/test';
import { AddRemoveElementsPage } from '@pages/add-remove-elements-page';
import { MainPage } from '@pages/main-page';

test.describe.configure({ mode: 'parallel' });

test.beforeEach(async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com');
});

test.describe('Add/Remove Elements Tests', () => {
  test('User should be able to go to the "Add/Remove Elements" page', async ({ page }) => {
    const mainPage = new MainPage(page);
    await mainPage.addRemoveElements();
    const addRemoveElementsPage = new AddRemoveElementsPage(page);
    await expect(addRemoveElementsPage.addElementButton).toBeVisible();
    await expect(addRemoveElementsPage.deleteElementButton).not.toBeVisible();
  });

  test('User should be able to add and remove one element', async ({ page }) => {
    const mainPage = new MainPage(page);
    await mainPage.addRemoveElements();
    const addRemoveElementsPage = new AddRemoveElementsPage(page);
    await addRemoveElementsPage.addElement();
    await expect(addRemoveElementsPage.deleteElementButton).toBeVisible();
    await addRemoveElementsPage.deleteElement();
    await expect(addRemoveElementsPage.deleteElementButton).not.toBeVisible();
  });

  test('User should be able to add and remove two elements', async ({ page }) => {
    const mainPage = new MainPage(page);
    await mainPage.addRemoveElements();
    const addRemoveElementsPage = new AddRemoveElementsPage(page);
    await addRemoveElementsPage.addElement();
    await expect(addRemoveElementsPage.deleteElementButton).toHaveCount(1);
    await addRemoveElementsPage.addElement();
    await expect(addRemoveElementsPage.deleteElementButton).toHaveCount(2);
    await addRemoveElementsPage.deleteElement();
    await expect(addRemoveElementsPage.deleteElementButton).toHaveCount(1);
    await addRemoveElementsPage.deleteElement();
    await expect(addRemoveElementsPage.deleteElementButton).not.toBeVisible();
  });
});
