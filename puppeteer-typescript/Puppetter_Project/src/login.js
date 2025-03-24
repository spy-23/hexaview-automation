import puppeteer from 'puppeteer';

const HEROKU_LOGIN_URL = 'https://id.heroku.com/login';
const EMAIL = 'your-email@example.com';  //email
const PASSWORD = 'your-secure-password'; //password

(async () => {
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();

    try {
        
        await page.goto(HEROKU_LOGIN_URL, { waitUntil: 'networkidle2' });

        await page.type('input[name="email"]', EMAIL, { delay: 100 });

        await page.type('input[name="password"]', PASSWORD, { delay: 100 });

        await Promise.all([
            page.click('button[type="submit"]'),
            page.waitForNavigation({ waitUntil: 'networkidle2' }) 
        ]);

        console.log('Login successful!');
        
        await page.screenshot({ path: 'heroku-dashboard.png' });

    } catch (error) {
        console.error('Error during login:', error);
    } finally {
        await browser.close();
    }
})();
