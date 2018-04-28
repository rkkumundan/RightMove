Feature: To Test the RightMove Web Application functionality for Sale

@ForSale
Scenario: Verify if unsigned user able to open the rightmove webpage
Given unsigned in user opens the rightmove url in chrome web browser
Then unsigned in user should be able to see the page
And unsigned in user closes the browser

@ForSale
Scenario Outline: Verify if unsigned user is able to search the property for Sale by using PIN code
Given unsigned in user opens the rightmove url in chrome web browser
Then unsigned in user able to search "<pin>" code for sale
And invokes for sale button to search 
And unsigned in user closes the browser

Examples:
| pin    |
| W52 BF |

@ForSale
Scenario Outline: Verify if unsigned user is able to search the property for Sale by using radius,property type, pricerange, bedrooms & added to site
Given unsigned in user opens the rightmove url in chrome web browser
When unsigned in user able to search "<pin>" code for sale
And invokes for sale button to search 
Then unsigned in user should land to the page with various search criteria for the "<pin>"
And unsigned in user should able to search by "<radius>", "<propertytype>", "<minpricerange>", "<maxpricerange>", "<minbedrooms>" ,"<maxbedrooms>" and "<addedtosite>"
And unsigned in user click on find properties
And unsigned in user closes the browser

Examples:
| pin    | radius         | propertytype | minpricerange | maxpricerange |minbedrooms | maxbedrooms | addedtosite   |     
| W5 2BF | Within 5 miles | Bungalows    | 50,000        |    700,000    | 1          |   5         | Last 3 days   |

@ForSale
Scenario Outline: Verify if unsigned user is able to search the property for Sale by sorting newest listed
Given unsigned in user opens the rightmove url in chrome web browser
When unsigned in user able to search "<pin>" code for sale
And invokes for sale button to search 
And unsigned in user should land to the page with various search criteria for the "<pin>"
And unsigned in user should able to search by "<radius>", "<propertytype>", "<minpricerange>", "<maxpricerange>", "<minbedrooms>" ,"<maxbedrooms>" and "<addedtosite>"
And unsigned in user click on find properties
Then usigned in user should be able to land in properties listed page for the mentioned "<pin>"
And unsiged in user should be able to sort property by "<sortingtype>" listed
And unsigned in user closes the browser

Examples:
| pin    | radius         | propertytype | minpricerange | maxpricerange |minbedrooms | maxbedrooms | addedtosite   | sortingtype  |    
| W5 2BF | Within 5 miles | Bungalows    | 50,000        | 20,000,000    | 1          |   5         | Last 3 days   | Newest Listed|


@ForSale
Scenario Outline: Verify if unsigned user is able to click the property for Sale of newest listed by sorting
Given unsigned in user opens the rightmove url in chrome web browser
When unsigned in user able to search "<pin>" code for sale
And invokes for sale button to search 
And unsigned in user should land to the page with various search criteria for the "<pin>"
And unsigned in user should able to search by "<radius>", "<propertytype>", "<minpricerange>", "<maxpricerange>", "<minbedrooms>" ,"<maxbedrooms>" and "<addedtosite>"
And unsigned in user click on find properties
And usigned in user should be able to land in properties listed page for the mentioned "<pin>"
And unsiged in user should be able to sort property by "<sortingtype>" listed
And unsiged in user able to click the new listed property
Then the new listed property page should open
And unsigned in user closes the browser

Examples:
| pin    | radius         | propertytype | minpricerange | maxpricerange |minbedrooms | maxbedrooms | addedtosite   | sortingtype  |    
| W5 2BF | Within 5 miles | Bungalows    | 50,000        | 20,000,000    | 1          |   5         | Last 3 days   | Newest Listed|








