import puppeteer from 'puppeteer';

let result = [];

const browser = await puppeteer.launch({headless: true});
const page = await browser.newPage();

export async function main() {
  // const browser = await puppeteer.launch({headless: true});
  // const page = await browser.newPage();
  await page.setDefaultNavigationTimeout(0)
  await page.setViewport({width: 1200, height: 720});
/*   await page.goto('https://github.com/login', { waitUntil: 'networkidle0' }); // wait until page load
  await page.type('#login_field', 'sanjay.s.gunagi@gmail.com');
  await page.type('#password', 'Me@1github');
  await page.screenshot({path: 'github1.png'});

//   console.log('logged in..');
  // click and wait for navigation
  // await Promise.all([
    await page.click('input[type=submit]')
    // await page.waitForNavigation({ waitUntil: 'networkidle0' })
    
    // console.log(page)
    await page.waitForTimeout(4000),
    await page.screenshot({path: 'github2.png'}) */

    await page.goto('https://github.com/GSSanjay?tab=repositories')
    // await page.waitForTimeout(4000)
    await page.screenshot({path: 'github3.png'})


    let regX = '//*[@id="user-repositories-list"]/ul/li[*]/div[1]/div[1]/h3/a';
    const aTags = await page.$x(regX);
    // const href = await el.getProperty('href');
    // const hrefText = await href.jsonValue();

    await aTags.forEach(async(elem) => {
      const href = await elem.getProperty('href');
      const hrefText = await href.jsonValue();
      // console.log(hrefText);
      await result.push({hrefText});
      // console.log(result);
    })

    // await console.log(aTags);
  
    // await browser.close();
    // await page.waitForTimeout(4000),

    // console.log(result);
    return result;
}
