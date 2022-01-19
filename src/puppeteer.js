const puppeteer = require("puppeteer")
const fs = require("fs/promises")

async function run() {
    const browser = await puppeteer.launch()
    const page = await browser.newPage()
    await page.goto("https://www.espn.com/nba/scoreboard/_/date/")
    
    const title = await page.evaluate(()=>{
        return document.querySelector(".Card__Header__Title").textContent
    })

    const teams = await page.evaluate(()=>{
        return Array.from(document.querySelectorAll(".ScoreCell__TeamName")).map(teams=>teams.textContent)
    })
    
    const teamsRecord = await page.evaluate(()=>{
        return Array.from(document.querySelectorAll(".ScoreCell__Score--record")).map(teams=>teams.textContent)
    })

    const gameTime = await page.evaluate(()=>{
        return Array.from(document.querySelectorAll(".ScoreCell__Time")).map(teams=>teams.textContent)
    })

    const photos = await page.evaluate(()=>{
        return Array.from(document.querySelectorAll(".ScoreCell__Logo")).map(imgs=>imgs.src)
    })
    await fs.writeFile("games.json" , JSON.stringify([{title},{teams},{teamsRecord},{gameTime},{photos}]))

    await browser.close()
}
run()
