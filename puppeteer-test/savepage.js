/**
 * @name get list of links
 *
 * @desc Scrapes Hacker News for links on the home page and returns the top 10
 */
const puppeteer = require("puppeteer");
const fs = require("fs");

(async () => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  await page.tracing.start({
    path: "trace.json",
    categories: ["devtools.timeline"]
  });
  await page.goto("https://news.ycombinator.com/newest", { waitUntil: 'networkidle0' });
  const links = await page.$$("a.storylink");
  
  for (i = 0; i < links.length; i++) {
    const page = await browser.newPage();
    await page.goto("https://news.ycombinator.com/newest", { waitUntil: 'networkidle0' });
    const links = await page.$$("a.storylink");
    const index = "foo";
    await links[i].click();
    // await page.waitFor(5000)
    await page.waitForNavigation({ waitUntil: "networkidle2" });
    const renderedContent = await page.evaluate(() =>
      new XMLSerializer().serializeToString(document)
    );
    fs.writeFile("content" + i + ".html", renderedContent, err => {
      if (err) throw err;
      console.log("Page" + i + "saved!");
    });
  }

  // await links[0].click()

  await page.tracing.stop();
  await browser.close();
})();
