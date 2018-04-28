$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("ToRent.feature");
formatter.feature({
  "line": 1,
  "name": "To Test the RightMove Web Application functionality to Rent",
  "description": "",
  "id": "to-test-the-rightmove-web-application-functionality-to-rent",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 2,
      "value": "#"
    },
    {
      "line": 3,
      "value": "#@ToRent"
    },
    {
      "line": 4,
      "value": "#Scenario: Verify if unsigned user able to open the rightmove webpage"
    },
    {
      "line": 5,
      "value": "#Given unsigned in user opens the rightmove url in chrome web browser"
    },
    {
      "line": 6,
      "value": "#Then unsigned in user should be able to see the page"
    },
    {
      "line": 7,
      "value": "#And unsigned in user closes the browser"
    },
    {
      "line": 8,
      "value": "#"
    },
    {
      "line": 9,
      "value": "#@ToRent"
    },
    {
      "line": 10,
      "value": "#Scenario Outline: Verify if unsigned user is able to search the property for rent by using PIN code"
    },
    {
      "line": 11,
      "value": "#Given unsigned in user opens the rightmove url in chrome web browser"
    },
    {
      "line": 12,
      "value": "#Then unsigned in user able to search \"\u003cpin\u003e\" code for rent"
    },
    {
      "line": 13,
      "value": "#And invokes for rent button to search"
    },
    {
      "line": 14,
      "value": "#And unsigned in user closes the browser"
    },
    {
      "line": 15,
      "value": "#"
    },
    {
      "line": 16,
      "value": "#Examples:"
    },
    {
      "line": 17,
      "value": "#| pin    |"
    },
    {
      "line": 18,
      "value": "#| W52 BF |"
    },
    {
      "line": 19,
      "value": "#"
    },
    {
      "line": 20,
      "value": "#@ToRent"
    },
    {
      "line": 21,
      "value": "#Scenario Outline: Verify if unsigned user is able to search the property for rent by using radius,property type, pricerange, bedrooms \u0026 added to site"
    },
    {
      "line": 22,
      "value": "#Given unsigned in user opens the rightmove url in chrome web browser"
    },
    {
      "line": 23,
      "value": "#When unsigned in user able to search \"\u003cpin\u003e\" code for rent"
    },
    {
      "line": 24,
      "value": "#And invokes for rent button to search"
    },
    {
      "line": 25,
      "value": "#Then unsigned in user should land to the page with various search criteria for the \"\u003cpin\u003e\" for rent"
    },
    {
      "line": 26,
      "value": "#And unsigned in user should able to search by \"\u003cradius\u003e\", \"\u003cpropertytype\u003e\", \"\u003cminpricerange\u003e\", \"\u003cmaxpricerange\u003e\", \"\u003cminbedrooms\u003e\" ,\"\u003cmaxbedrooms\u003e\" and \"\u003caddedtosite\u003e\""
    },
    {
      "line": 27,
      "value": "#And unsigned in user click on find properties"
    },
    {
      "line": 28,
      "value": "#And unsigned in user closes the browser"
    },
    {
      "line": 29,
      "value": "#"
    },
    {
      "line": 30,
      "value": "#Examples:"
    },
    {
      "line": 31,
      "value": "#| pin    | radius         | propertytype | minpricerange | maxpricerange |minbedrooms | maxbedrooms | addedtosite   |"
    },
    {
      "line": 32,
      "value": "#| W5 2BF | Within 5 miles | Bungalows    | 500 PCM       | 40,000 PCM    | 1          |   5         | Last 3 days   |"
    },
    {
      "line": 33,
      "value": "#"
    },
    {
      "line": 34,
      "value": "#@ToRent"
    },
    {
      "line": 35,
      "value": "#Scenario Outline: Verify if unsigned user is able to search the property to rent by sorting newest listed"
    },
    {
      "line": 36,
      "value": "#Given unsigned in user opens the rightmove url in chrome web browser"
    },
    {
      "line": 37,
      "value": "#When unsigned in user able to search \"\u003cpin\u003e\" code for rent"
    },
    {
      "line": 38,
      "value": "#And invokes for rent button to search"
    },
    {
      "line": 39,
      "value": "#Then unsigned in user should land to the page with various search criteria for the \"\u003cpin\u003e\" for rent"
    },
    {
      "line": 40,
      "value": "#And unsigned in user should able to search by \"\u003cradius\u003e\", \"\u003cpropertytype\u003e\", \"\u003cminpricerange\u003e\", \"\u003cmaxpricerange\u003e\", \"\u003cminbedrooms\u003e\" ,\"\u003cmaxbedrooms\u003e\" and \"\u003caddedtosite\u003e\""
    },
    {
      "line": 41,
      "value": "#And unsigned in user click on find properties"
    },
    {
      "line": 42,
      "value": "#Then usigned in user should be able to land in properties listed page for the mentioned \"\u003cpin\u003e\" to rent"
    },
    {
      "line": 43,
      "value": "#And unsinged in user should be able to sort property by \"\u003csortingtype\u003e\" listed"
    },
    {
      "line": 44,
      "value": "#And unsigned in user closes the browser"
    },
    {
      "line": 45,
      "value": "#"
    },
    {
      "line": 46,
      "value": "#Examples:"
    },
    {
      "line": 47,
      "value": "#| pin    | radius         | propertytype | minpricerange | maxpricerange |minbedrooms | maxbedrooms | addedtosite   | sortingtype   |"
    },
    {
      "line": 48,
      "value": "#| W5 2BF | Within 5 miles | Bungalows    | 500 PCM       | 40,000 PCM    | 1          |   5         | Last 3 days   | Newest Listed |"
    }
  ],
  "line": 51,
  "name": "Verify if unsigned user is able to click the property to rent of newest listed by sorting",
  "description": "",
  "id": "to-test-the-rightmove-web-application-functionality-to-rent;verify-if-unsigned-user-is-able-to-click-the-property-to-rent-of-newest-listed-by-sorting",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 50,
      "name": "@ToRent"
    }
  ]
});
formatter.step({
  "line": 52,
  "name": "unsigned in user opens the rightmove url in chrome web browser",
  "keyword": "Given "
});
formatter.step({
  "line": 53,
  "name": "unsigned in user able to search \"\u003cpin\u003e\" code for rent",
  "keyword": "When "
});
formatter.step({
  "line": 54,
  "name": "invokes for rent button to search",
  "keyword": "And "
});
formatter.step({
  "line": 55,
  "name": "unsigned in user should land to the page with various search criteria for the \"\u003cpin\u003e\" for rent",
  "keyword": "Then "
});
formatter.step({
  "line": 56,
  "name": "unsigned in user should able to search by \"\u003cradius\u003e\", \"\u003cpropertytype\u003e\", \"\u003cminpricerange\u003e\", \"\u003cmaxpricerange\u003e\", \"\u003cminbedrooms\u003e\" ,\"\u003cmaxbedrooms\u003e\" and \"\u003caddedtosite\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 57,
  "name": "unsigned in user click on find properties",
  "keyword": "And "
});
formatter.step({
  "line": 58,
  "name": "usigned in user should be able to land in properties listed page for the mentioned \"\u003cpin\u003e\" to rent",
  "keyword": "And "
});
formatter.step({
  "line": 59,
  "name": "unsigned in user should be able to sort property by \"\u003csortingtype\u003e\" listed",
  "keyword": "And "
});
formatter.step({
  "line": 60,
  "name": "unsigned in user able to click the new listed to rent property",
  "keyword": "And "
});
formatter.step({
  "line": 61,
  "name": "the new listed property page should open",
  "keyword": "Then "
});
formatter.step({
  "line": 62,
  "name": "unsigned in user closes the browser",
  "keyword": "And "
});
formatter.examples({
  "line": 64,
  "name": "",
  "description": "",
  "id": "to-test-the-rightmove-web-application-functionality-to-rent;verify-if-unsigned-user-is-able-to-click-the-property-to-rent-of-newest-listed-by-sorting;",
  "rows": [
    {
      "cells": [
        "pin",
        "radius",
        "propertytype",
        "minpricerange",
        "maxpricerange",
        "minbedrooms",
        "maxbedrooms",
        "addedtosite",
        "sortingtype"
      ],
      "line": 65,
      "id": "to-test-the-rightmove-web-application-functionality-to-rent;verify-if-unsigned-user-is-able-to-click-the-property-to-rent-of-newest-listed-by-sorting;;1"
    },
    {
      "cells": [
        "W5 2BF",
        "Within 5 miles",
        "Bungalows",
        "500 PCM",
        "40,000 PCM",
        "1",
        "5",
        "Last 3 days",
        "Newest Listed"
      ],
      "line": 66,
      "id": "to-test-the-rightmove-web-application-functionality-to-rent;verify-if-unsigned-user-is-able-to-click-the-property-to-rent-of-newest-listed-by-sorting;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 66,
  "name": "Verify if unsigned user is able to click the property to rent of newest listed by sorting",
  "description": "",
  "id": "to-test-the-rightmove-web-application-functionality-to-rent;verify-if-unsigned-user-is-able-to-click-the-property-to-rent-of-newest-listed-by-sorting;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 50,
      "name": "@ToRent"
    }
  ]
});
formatter.step({
  "line": 52,
  "name": "unsigned in user opens the rightmove url in chrome web browser",
  "keyword": "Given "
});
formatter.step({
  "line": 53,
  "name": "unsigned in user able to search \"W5 2BF\" code for rent",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 54,
  "name": "invokes for rent button to search",
  "keyword": "And "
});
formatter.step({
  "line": 55,
  "name": "unsigned in user should land to the page with various search criteria for the \"W5 2BF\" for rent",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 56,
  "name": "unsigned in user should able to search by \"Within 5 miles\", \"Bungalows\", \"500 PCM\", \"40,000 PCM\", \"1\" ,\"5\" and \"Last 3 days\"",
  "matchedColumns": [
    1,
    2,
    3,
    4,
    5,
    6,
    7
  ],
  "keyword": "And "
});
formatter.step({
  "line": 57,
  "name": "unsigned in user click on find properties",
  "keyword": "And "
});
formatter.step({
  "line": 58,
  "name": "usigned in user should be able to land in properties listed page for the mentioned \"W5 2BF\" to rent",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 59,
  "name": "unsigned in user should be able to sort property by \"Newest Listed\" listed",
  "matchedColumns": [
    8
  ],
  "keyword": "And "
});
formatter.step({
  "line": 60,
  "name": "unsigned in user able to click the new listed to rent property",
  "keyword": "And "
});
formatter.step({
  "line": 61,
  "name": "the new listed property page should open",
  "keyword": "Then "
});
formatter.step({
  "line": 62,
  "name": "unsigned in user closes the browser",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinations.unsigned_in_user_opens_the_rightmove_url_in_chrome_web_browser()"
});
formatter.result({
  "duration": 9905637553,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "W5 2BF",
      "offset": 33
    }
  ],
  "location": "StepDefinations.unsigned_in_user_able_to_search_code_for_rent(String)"
});
formatter.result({
  "duration": 145023133,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinations.invokes_for_rent_button_to_search()"
});
formatter.result({
  "duration": 1070560212,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "W5 2BF",
      "offset": 79
    }
  ],
  "location": "StepDefinations.unsigned_in_user_should_land_to_the_page_with_various_search_criteria_for_the_for_rent(String)"
});
formatter.result({
  "duration": 57473244,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Within 5 miles",
      "offset": 43
    },
    {
      "val": "Bungalows",
      "offset": 61
    },
    {
      "val": "500 PCM",
      "offset": 74
    },
    {
      "val": "40,000 PCM",
      "offset": 85
    },
    {
      "val": "1",
      "offset": 99
    },
    {
      "val": "5",
      "offset": 104
    },
    {
      "val": "Last 3 days",
      "offset": 112
    }
  ],
  "location": "StepDefinations.unsigned_in_user_should_able_to_search_by_and(String,String,String,String,String,String,String)"
});
formatter.result({
  "duration": 712824318,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinations.unsigned_in_user_click_on_find_properties()"
});
formatter.result({
  "duration": 2197619999,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "W5 2BF",
      "offset": 84
    }
  ],
  "location": "StepDefinations.usigned_in_user_should_be_able_to_land_in_properties_listed_page_for_the_mentioned_to_rent(String)"
});
formatter.result({
  "duration": 6553747,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Newest Listed",
      "offset": 53
    }
  ],
  "location": "StepDefinations.unsigned_in_user_should_be_able_to_sort_property_by_listed(String)"
});
formatter.result({
  "duration": 70792697,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinations.unsigned_in_user_able_to_click_the_new_listed_to_rent_property()"
});
formatter.result({
  "duration": 2668857496,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinations.the_new_listed_property_page_should_open()"
});
formatter.result({
  "duration": 39426008,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinations.unsigned_in_user_closes_the_browser()"
});
formatter.result({
  "duration": 656011938,
  "status": "passed"
});
});