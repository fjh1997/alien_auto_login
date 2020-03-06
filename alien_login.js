const puppeteer = require('puppeteer');
puppeteer.launch({
  headless: true,//指定是不是無頭模式，調試的時候可以改成false
  args: ['--proxy-server=socks5://127.0.0.1:1082'],//用到的美區代理
  slowMo: 100
}).then(async browser => {//使用slowmode防止被alienware判斷為是機器。
  try {
    const page = await browser.newPage();
    console.log("正在打開頁面.....");
    await page.goto('https://na.alienwarearena.com/', { timeout: 0, waitUntil: "load" });
    console.log("打開頁面完成，正在尋找登錄面版");
    await page.waitForSelector('[class="nav-link nav-link-login"]');
    console.log("登錄面版找到，點擊登錄面板");
    await page.click('[class="nav-link nav-link-login"]');
    console.log("點擊完成，等待登錄框出現。。。");
    await page.waitForSelector('#_username');
    console.log("登錄框出現，正在輸入用戶名密碼.....");
    await page.$eval('#_username', el => el.value = 'fjh1997');//這裡寫你的用戶名
    await page.$eval('#_password', el => el.value = 'xxxxxxxx');//這裡寫你的密碼
    console.log("用戶名密碼輸入完成，正在等待登錄按鈕.....")
    await page.waitForSelector('#_login');
    console.log("正在點擊登錄按鈕.....");
    await page.click('#_login');
    console.log("等待登錄.....");
    await page.waitForSelector("#umCollapse");
    console.log("登錄成功");
  } catch (err) {
    console.log("登錄失敗");
    console.error(err.message);
  } finally {
    await browser.close();
  }
});


