import { expect, test } from '@playwright/test';

test('Product Page', async ({ page }) => {
    await test.step("Navigate to Playwright", async () => {
        await page.goto("https://material.playwrightvn.com/");
    });

    await test.step("Click Bài học 2", async () => {
        await page.locator('//a[text() = "Bài học 2: Product page"]').click();
    });

    await test.step("Add Product 1", async () => {
        await page.locator('//button[@data-product-id="1"]').click({ clickCount: 2 });
    });

    await test.step("Add Product 2", async () => {
        await page.locator('//button[@data-product-id="2"]').click({ clickCount: 3 });
    });

    await test.step("Add Product 3", async () => {
        await page.locator('//button[@data-product-id="3"]').click({ clickCount: 1 });
    });
});