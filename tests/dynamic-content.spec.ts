import { test } from "@playwright/test";


test('Dynamic Content test', async ({page})=>{
        await page.goto(`${process.env.BASE_URL}/dynamic_content`);
   const rowText = await page.locator('.row > div.large-10.columns:nth-of-type(2)').nth(0).innerText();
   console.log(rowText);
})

