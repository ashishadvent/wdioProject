Feature: Demo feature

@demo
Scenario Outline: Open the browser and running login page
 Given Google page opened
 When Search with <SearchItem>
 Then Click on first searched result
 Then URL should match <ExpectedURL>
Examples:
    | testID | SearchItem | ExpectedURL |
    | 1      | WDIO       | https://webdriver.io/  |
