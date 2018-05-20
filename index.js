const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch({headless: false});
    const page = await browser.newPage();
    page.setViewport({ width: 1280, height: 720 });
    await page.goto('https://www.messenger.com/', { waitUntil: 'networkidle2' });

    let emailField = await page.$('[name=email]');
    let passwordField = await page.$('[name=pass]');
    let submitButton = await page.$('button');

    await emailField.type('YourFuckingEmail@SomeFuckingCompany');
    await passwordField.type('YourFuckingPassword');
    
    
    // Wait til submit button is clicked and the page is loaded
    const navigationPromise = page.waitForNavigation();

    await submitButton.click();

    // End Wait
    await navigationPromise;
    
    
    // Your Fucking Messenger Receipient URL
    const MESSENGER_URL = 'https://www.messenger.com/t/199901607012936/';

    await page.goto(MESSENGER_URL, { waitUntil: 'networkidle2' });     

    /*********************************************************************
     *                  SPAM CHANGE GROUP AVATAR                         *
     *********************************************************************/
    const pictures = ['./sticker.png', './sticker2.jpg', './sticker3.png']    
    setInterval(async () => {
        const elementsHandle = await page.$('input[type=file]');
        for (let picture of pictures) {
            await elementsHandle.uploadFile(picture);
        }
    }, 1000);


    /*********************************************************************
     *                          SPAM MESSAGE                             *
     *********************************************************************/
    // Your fucking Spam Message
    // setInterval( async () => {
    //     page.type('._1p1t', 'Chó Phương :poop:')
    //         .then(() => {
    //             page.keyboard.press('Enter');
    //         })
    //         .catch((e) => {
    //             console.log("Just to quickly!!! But it's still running!");
    //         });
    // }, 1000);
})();

