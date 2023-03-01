const { WebElement } = require("selenium-webdriver");
const {Builder, By, Key, util} = require("selenium-webdriver");

async function profil2(){
    let driver = await new Builder().forBrowser("chrome").build();
    const actions = driver.actions;
    await driver.get("https://dev.safetysolutions.app/login");
    await driver.findElement(By.xpath("//input[@type='text']")).sendKeys("aiss@example.com",Key.RETURN);
    await driver.sleep(500);
    await driver.findElement(By.xpath("//input[@type='password']")).sendKeys("aiss");
    await driver.sleep(2000);
    await driver.findElement(By.className("MuiLoadingButton-root MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium MuiButton-containedSizeMedium MuiButtonBase-root jss18 css-1eqougf")).click();
    await driver.sleep(1000);
    await driver.findElement(By.xpath("//*[contains(text(), 'Ustawienia')]")).click();
    await driver.sleep(2000);
    await driver.findElement(By.xpath("//*[contains(text(), 'Użytkownicy')]")).click();
    await driver.sleep(2000);
    await driver.findElement(By.className("MuiLoadingButton-root MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium MuiButton-containedSizeMedium MuiButtonBase-root jss499 css-1eqougf")).click();
    await driver.sleep(2000);
    //od momentu dodawania nie mozna dodać nowego uzytkownika 
}
profil2();