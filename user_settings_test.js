const { WebElement } = require("selenium-webdriver");
const {Builder, By, Key, util} = require("selenium-webdriver");

async function profil4(){
    let driver = await new Builder().forBrowser("chrome").build();
    const actions = driver.actions;
    //kawałek kodu do tworzenia nowego maila na yopmail
    await driver.get("https://yopmail.com/pl/");
    await driver.sleep(2000);
    await driver.findElement(By.xpath("//*[contains(text(), 'Accept Recommended Cookies & Continue')]")).click();
    await driver.sleep(2000);
    await driver.findElement(By.className("ycptinput")).sendKeys("testyAISS1" + Math.ceil(Math.random() * 10));
    await driver.sleep(2000);
    await driver.findElement(By.className("ycptinput")).sendKeys(Key.chord(Key.COMMAND, 'A'));
    await driver.sleep(2000);
    await driver.findElement(By.className("ycptinput")).sendKeys(Key.chord(Key.COMMAND, 'C'));
    await driver.sleep(2000);
    await driver.findElement(By.className("material-icons-outlined f36")).click();
    await driver.sleep(2000);
    await driver.get("https://dev.safetysolutions.app/login");
    await driver.sleep(1000);
    await driver.findElement(By.xpath("//input[@type='text']")).sendKeys("aiss@example.com",Key.RETURN);
    await driver.sleep(500);
    await driver.findElement(By.xpath("//input[@type='password']")).sendKeys("aiss");
    await driver.sleep(2000);
    await driver.findElement(By.className("MuiLoadingButton-root MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium MuiButton-containedSizeMedium MuiButtonBase-root jss18 css-1eqougf")).click();
    await driver.sleep(2000);
    await driver.get("https://dev.safetysolutions.app/settings/users");
    await driver.sleep(2000);
    await driver.findElement(By.id(":r0:")).click();
    await driver.sleep(2000);
    await driver.findElement(By.xpath("//input[@type='text']")).sendKeys(Key.chord(Key.COMMAND, 'V'));
    await driver.sleep(2000);
    await driver.findElement(By.xpath("//input[@type='text']")).sendKeys("@yopmail.com");
    await driver.sleep(2000);
    await driver.findElement(By.id(":r2:")).click();
    await driver.sleep(2000);
    //przejscie do yopmaila 
    //zaakceptowanie linku aktywacyjnego
    //powrót do strony z uzytkownikami
    //usunięcie uzytkownika (button kosza i dobrego uzytkownika)
    //wylogowanie

}
profil4();