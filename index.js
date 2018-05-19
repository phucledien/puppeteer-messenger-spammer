const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    page.setViewport({ width: 1280, height: 720 });
    await page.goto('https://www.messenger.com/', { waitUntil: 'networkidle2' });

    let emailField = await page.$('[name=email]');
    let passwordField = await page.$('[name=pass]');
    let submitButton = await page.$('button');

    await emailField.type('YourFuckingEmail@SomeFuckingCompany');
    await passwordField.type('YourFuckingPassword');
    const navigationPromise = page.waitForNavigation();
    await submitButton.click();

    await navigationPromise;
    
    // Your Fucking Messenger Receipient URL
    const MESSENGER_URL = 'https://www.messenger.com/t/199901607012936/';

    await page.goto(MESSENGER_URL, { waitUntil: 'networkidle2' });     
    
    // Your fucking Spam Message
    setInterval( async () => {
        await page.type('._1p1t', 'RIP FITZ!!! :(');
        await page.keyboard.press('Enter');
    }, 1000);
})();

