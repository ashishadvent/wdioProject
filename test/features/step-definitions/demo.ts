import { Given,Then,When } from "@cucumber/cucumber";
import chai from "chai"

Given(/^Google page opened$/,function() {
    browser.url("https://www.google.com")
    browser.pause(70000)
    
})

When(/^Search with (.*)$/,async function(searchItems){
    console.log(`>>Search Items : ${searchItems}`);
    let ele=await $(`[name=q]`)  
    await ele.setValue(searchItems) 
    await browser.keys("Enter")
})

Then(/^Click on first searched result$/,async function(){
    let ele=$(`<h3>`)
    await ele.click()
})

Then(/^URL should match (.*)$/,async function(ExpectedURL){
    console.log(`>>URL Should be : ${ExpectedURL}`);
    let url= await browser.getUrl()
    chai.expect(url).to.equal(ExpectedURL)

})