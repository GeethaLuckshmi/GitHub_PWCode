import { test } from "@playwright/test";

test("Learn to Interact with Select tag dropdown", async ({ page }) => {

    await page.goto("https://leaftaps.com/opentaps/control/main");

    await page.waitForTimeout(3000);

    await page.locator('//input[@id="username"]').fill("democsr2");

    await page.locator('//input[@id="password"]').fill("crmsfa");

    await page.locator('//input[@class="decorativeSubmit"]').click();

    await page.waitForTimeout(3000);

    await page.locator('//a[contains(text(),"CRM")]').click();

    await page.waitForTimeout(3000);

    await page.locator('//a[text()="Leads"]').click();

    await page.locator('//a[text()="Create Lead"]').click();

    await page.locator('//input[@id="createLeadForm_companyName"]').fill("Testleaf");

    await page.locator('//input[@id="createLeadForm_firstName"]').fill("Geetha");

    await page.locator('//input[@id="createLeadForm_lastName"]').fill("M");

    await page.waitForTimeout(3000);

    //Select tag dropdown
    //Step1 : Identify the drop from DOM using relative Xpath.
    //Step2 : Pass the 2nd argument using label,  value or index
    //Note : What is the priority : 1. value is conneted to the backend hence more stable, 2. label, 3. index

   // await page.selectOption('//select[@id="createLeadForm_dataSourceId"]', { label: "Direct Mail" });//option1 using label // {key:value} here the key => label is the visibile text in the DOM

  //  await page.selectOption('//select[@id="createLeadForm_dataSourceId"]', { value: "LEAD_DIRECTMAIL" }); //Option2: using value 

    await page.selectOption('//select[@id="createLeadForm_dataSourceId"]', { index: 3 }); //Option3: using index 

    //Get the dropdown values using innerText()

    let dropDownValues = page.locator('//select[@id="createLeadForm_dataSourceId"]/option') //dropDownValues// This holds 13 dropdown webelement

    const dropDownCount = await dropDownValues.count() // This line is extract the number of dropdown locator objects present in the DOM
        
    for (let i = 0; i < dropDownCount; i++) {       

        let dropDownValues = await page.locator('//select[@id="createLeadForm_dataSourceId"]/option').nth(i).innerText();
        console.log(dropDownValues);        
    }

    //To retreive 3rd value from the dropdown

   const thirdDropDownValue = await page.locator('//select[@id="createLeadForm_dataSourceId"]/option').nth(3).innerText(); // DIRECT MAIL
   console.log(thirdDropDownValue); 

    //get all the values from Industry dropdown
    const industryList =page.locator('//select[@id="createLeadForm_industryEnumId"]/option');
    const indsutryListCount = await industryList.count();

    for (let i=0;i<=indsutryListCount-1;i++){
        let industryValue = await page.locator('//select[@id="createLeadForm_industryEnumId"]/option').nth(i).innerText();
        console.log(industryValue);
    }
    await page.waitForTimeout(3000); // for demo

    await page.locator('//input[@name="submitButton"]').click();

    const status = await page.locator('//span[@id="viewLead_statusId_sp"]').innerText(); // "Assigned"

    console.log(status);

    await page.waitForTimeout(3000); // for demo
})