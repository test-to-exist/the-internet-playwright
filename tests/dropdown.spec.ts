import { expect, test } from "@playwright/test";

// TODO - add page + move selectors and add fixture
test('User is able to select dropdown options', async ({page}) => {
    await page.goto(`${process.env.BASE_URL}/dropdown`);
    const dropdown = page.locator('#dropdown');
    await expect(page.getByRole('option', { name: 'Please select an option' }))
    .toHaveAttribute('selected');
    await dropdown.selectOption('Option 1')
    await expect(page.getByRole('option', { name: 'Option 1' }))
    .toHaveAttribute('selected');
    await dropdown.selectOption('Option 2')
    await expect(page.getByRole('option', { name: 'Option 2' }))
    .toHaveAttribute('selected');
});
