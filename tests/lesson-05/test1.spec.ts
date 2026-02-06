import { expect, test } from "@playwright/test";

test('Register', async ({ page }) => {
    await test.step("Navigate to Playwright", async () => {
        await page.goto("https://material.playwrightvn.com/");
    });

    await test.step("Click Bài học 1", async () => {
        await page.locator('//a[@href="01-xpath-register-page.html"]').click();
    });

    await test.step("Input data", async () => {
        await page.locator('//input[@id="username"]').fill('Hoang Anh');
        await page.locator('//input[@id="email"]').fill('email@gmail.com');
    });

    await test.step("Select gender", async () => {
        let isCheckMale = await page.locator('//input[@id="male"]').isChecked();
        if (!isCheckMale) {
            await page.locator('//input[@id="male"]').check();
        }
    });

    await test.step("Select hobbies", async () => {
        let isCheckReading = await page.locator('//input[@id="reading"]').isChecked();
        let isCheckTravelling = await page.locator('//input[@id="traveling"]').isChecked();
        let isCheckCooking = await page.locator('//input[@id="cooking"]').isChecked();
        if (!isCheckReading && !isCheckTravelling && !isCheckCooking) {
            await page.locator('//input[@id="reading"]').check();
            await page.locator('//input[@id="traveling"]').check();
        }
    })

    await test.step("Select interest", async () => {
        await page.locator('//option[@value="technology"]').click();
        await page.locator('//option[@value="music"]').click({ modifiers: ["ControlOrMeta"] });
        await page.locator('//option[@value="sports"]').click({ modifiers: ["ControlOrMeta"] });
    })

    await test.step("Select country", async () => {
        await page.locator('//select[@id = "country"]').selectOption("United Kingdom");
    });

    await test.step("Input DOB", async () => {
        await page.locator('//input[@id = "dob"]').pressSequentially("12022020");
    });

    await test.step("Upload file", async () => {
        await page.locator('//input[@type = "file"]').setInputFiles("tests/lesson-05/img/chrome_CTHW09Ghtl.png");
    });

    await test.step("Input Biography", async () => {
        await page.locator('//textarea[@id = "bio"]').fill("This is biography field a");
    });

    await test.step("Input Rate", async () => {
        await page.locator('//input[@id = "rating"]').fill('7');
    });

    await test.step("select color", async () => {
        await page.locator('//input[@id="favcolor"]').fill('#572c9c');
    });

    await test.step("Subcribe Newsletter", async () => {
        await page.locator('//div[@class="tooltip"]').hover();
        await expect(page.locator('//span[@class="tooltiptext"]')).toBeVisible();
        await page.locator('//input[@id="newsletter"]').click();
    });

    await test.step("Star rating", async () => {
        await page.locator('//div[@id="starRating"]').click({ position: { x: 50, y: 10 } });
    });

    await test.step("Enable feature", async () => {
        await page.locator('//span[@class="slider round"]').click();
    });

    await test.step("Click Register", async () => {
        await page.locator('//button[text() = "Register"]').click();
        await expect(page.getByRole("cell", { name: 'Hoang Anh' })).toBeVisible();
    });
});