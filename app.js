const puppeteer = require("puppeteer");

(async () => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  await page.setViewport({ width: 1280, height: 720 });

  await page.goto("https://www.youtube.comç");
  await page.pdf({ path: "example.pdf" });
  await browser.close();
})();
