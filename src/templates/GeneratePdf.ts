import puppeteer from 'puppeteer';
import ejs from 'ejs';
import path from 'path';

export async function generateQaydVaraqa(data: any, outputPath: string): Promise<void> {
    const templatePath = path.join(__dirname, '', 'qayd.ejs');

    const html: string = await ejs.renderFile(templatePath, data, { async: true }); // ✅ asosiy yechim shu

    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    await page.setContent(html, { waitUntil: 'load' });
    await page.pdf({ path: outputPath, format: 'A4' });

    await browser.close();
}