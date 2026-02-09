import { test } from '@playwright/test'

test('Peronal notes', async ({ page }) => {
    await test.step("Navigate to Playwright", async () => {
        await page.goto("https://material.playwrightvn.com/");
    });

    await test.step("Click Bài học 4", async () => {
        await page.locator('//a[text() = "Bài học 4: Personal notes"]').click();
    });

    const peronalNotes = [
        { title: "Click", content: "Hàm click dùng để thực hiện click vào các phần tử trên trên trang web" },
        { title: "fill", content: "Hàm fill dùng để điền văn bản vào các trường input hoặc textarea trên trang web" },
        { title: "type", content: "Hàm type dùng để nhập từng ký tự vào 1 phần tử, mô phỏng hành vi gõ phím thực tế của người dùng" },
        { title: "hover", content: "Hàm hover dùng để di chuyển chuột đến vị trí của phần tử, kích hoạt các hiệu ứng hover" },
        { title: "check", content: "Hàm check dùng để đánh dấu checkbox hoặc radio button, đảm bảo phần tử ở trạng thái checked" },
        { title: "uncheck", content: "Hàm uncheck dùng để bỏ đánh dấu checkbox, đảm bảo phần tử ở trạng thái unchecked" },
        { title: "selectOption", content: "Hàm selectOption dùng để chọn một hoặc nhiều option trong thẻ select dropdown" },
        { title: "press", content: "Hàm press dùng để mô phỏng việc nhấn phím bàn phím như Enter, Tab, Escape hoặc các phím khác" },
        { title: "dblclick", content: "Hàm dblclick dùng để thực hiện double click (nhấp đúp chuột) vào phần tử trên trang web" },
        { title: "dragAndDrop", content: "Hàm dragAndDrop dùng để kéo 1 phần tử từ vị trí nguồn và thả vào vị trí đích trên trang web" }
    ];

    await test.step("Add 10 notes", async () => {
        for (let index in peronalNotes) {
            await page.locator('//input[@id="note-title"]').fill(peronalNotes[index].title);
            await page.locator('//textarea[@id="note-content"]').fill(peronalNotes[index].content);
            await page.locator('//button[@id="add-note"]').click();
        }
    });

    await test.step("Search", async () => {
        await page.locator('//input[@id="search"]').fill(peronalNotes[5].title);
    });
});