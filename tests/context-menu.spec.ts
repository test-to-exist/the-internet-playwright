import { MainPage } from "@pages/main-page";
import test, { expect } from "@playwright/test";

test('User should be able to see context menu alert', async ({page}) => {
    await page.goto(process.env.BASE_URL);
    const mainPage = new MainPage(page);
    const contextMenuPage = await mainPage.contextMenu();
    page.on('dialog', dialog => { 
        expect(dialog.message()).toContain('You selected a context menu');
        dialog.accept()
    });
    await contextMenuPage.showContextMenu();
})