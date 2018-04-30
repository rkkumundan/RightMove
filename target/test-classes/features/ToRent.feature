Feature: To Test the RightMove Web Application functionality to Rent

@ToRent
Scenario: Verify if unsigned user able to open the rightmove webpage
Given unsigned in user opens the rightmove url in chrome web browser
Then unsigned in user should be able to see the page
And unsigned in user closes the browser

@ToRent
Scenario Outline: Verify if unsigned user is able to search the property for rent by using PIN code
Given unsigned in user opens the rightmove url in chrome web browser
Then unsigned in user able to search "<pin>" code for rent
And invokes for rent button to search 
And unsigned in user closes the browser

Examples:
| pin    |
| W52 BF |

@ToRent
Scenario Outline: Verify if unsigned user is able to search the property for rent by using radius,property type, pricerange, bedrooms & added to site
Given unsigned in user opens the rightmove url in chrome web browser
When unsigned in user able to search "<pin>" code for rent
And invokes for rent button to search 
Then unsigned in user should land to the page with various search criteria for the "<pin>" for rent
And unsigned in user should able to search by "<radius>", "<propertytype>", "<minpricerange>", "<maxpricerange>", "<minbedrooms>" ,"<maxbedrooms>" and "<addedtosite>"
And unsigned in user click on find properties
And unsigned in user closes the browser

Examples:
| pin    | radius         | propertytype | minpricerange | maxpricerange |minbedrooms | maxbedrooms | addedtosite   |     
| W5 2BF | Within 5 miles | Bungalows    | 500 PCM       | 40,000 PCM    | 1          |   5         | Last 3 days   |

@ToRent
Scenario Outline: Verify if unsigned user is able to search the property to rent by sorting newest listed
Given unsigned in user opens the rightmove url in chrome web browser
When unsigned in user able to search "<pin>" code for rent
And invokes for rent button to search 
Then unsigned in user should land to the page with various search criteria for the "<pin>" for rent
And unsigned in user should able to search by "<radius>", "<propertytype>", "<minpricerange>", "<maxpricerange>", "<minbedrooms>" ,"<maxbedrooms>" and "<addedtosite>"
And unsigned in user click on find properties
Then usigned in user should be able to land in properties listed page for the mentioned "<pin>" to rent
And unsigned in user should be able to sort property by "<sortingtype>" listed
And unsigned in user closes the browser

Examples:
| pin    | radius         | propertytype | minpricerange | maxpricerange |minbedrooms | maxbedrooms | addedtosite   | sortingtype   |  
| W5 2BF | Within 5 miles | Bungalows    | 500 PCM       | 40,000 PCM    | 1          |   5         | Last 3 days   | Newest Listed |

@ToRent
Scenario Outline: Verify if unsigned user is able to click the property to rent of newest listed by sorting
Given unsigned in user opens the rightmove url in chrome web browser
When unsigned in user able to search "<pin>" code for rent
And invokes for rent button to search 
Then unsigned in user should land to the page with various search criteria for the "<pin>" for rent
And unsigned in user should able to search by "<radius>", "<propertytype>", "<minpricerange>", "<maxpricerange>", "<minbedrooms>" ,"<maxbedrooms>" and "<addedtosite>"
And unsigned in user click on find properties
And usigned in user should be able to land in properties listed page for the mentioned "<pin>" to rent
And unsigned in user should be able to sort property by "<sortingtype>" listed
And unsigned in user able to click the new listed to rent property
Then the new listed property page should open
And unsigned in user closes the browser

Examples:
| pin    | radius         | propertytype | minpricerange | maxpricerange |minbedrooms | maxbedrooms | addedtosite   | sortingtype   |  
| W5 2BF | Within 5 miles | Bungalows    | 500 PCM       | 40,000 PCM    | 1          |   5         | Last 3 days   | Newest Listed |

