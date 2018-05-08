$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("ToRent.feature");
formatter.feature({
  "line": 1,
  "name": "To Test the RightMove Web Application functionality to Rent",
  "description": "",
  "id": "to-test-the-rightmove-web-application-functionality-to-rent",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 4,
  "name": "Verify if unsigned user able to open the rightmove webpage",
  "description": "",
  "id": "to-test-the-rightmove-web-application-functionality-to-rent;verify-if-unsigned-user-able-to-open-the-rightmove-webpage",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 3,
      "name": "@ToRent"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "unsigned in user opens the rightmove url in chrome web browser",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "unsigned in user should be able to see the page",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "unsigned in user closes the browser",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinations.unsigned_in_user_opens_the_rightmove_url_in_chrome_web_browser()"
});
formatter.result({
  "duration": 50724385141,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinations.unsigned_in_user_should_be_able_to_see_the_page()"
});
formatter.result({
  "duration": 187907741,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinations.unsigned_in_user_closes_the_browser()"
});
formatter.result({
  "duration": 1277748277,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 10,
  "name": "Verify if unsigned user is able to search the property for rent by using PIN code",
  "description": "",
  "id": "to-test-the-rightmove-web-application-functionality-to-rent;verify-if-unsigned-user-is-able-to-search-the-property-for-rent-by-using-pin-code",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 9,
      "name": "@ToRent"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "unsigned in user opens the rightmove url in chrome web browser",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "unsigned in user able to search \"\u003cpin\u003e\" code for rent",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "invokes for rent button to search",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "unsigned in user closes the browser",
  "keyword": "And "
});
formatter.examples({
  "line": 16,
  "name": "",
  "description": "",
  "id": "to-test-the-rightmove-web-application-functionality-to-rent;verify-if-unsigned-user-is-able-to-search-the-property-for-rent-by-using-pin-code;",
  "rows": [
    {
      "cells": [
        "pin"
      ],
      "line": 17,
      "id": "to-test-the-rightmove-web-application-functionality-to-rent;verify-if-unsigned-user-is-able-to-search-the-property-for-rent-by-using-pin-code;;1"
    },
    {
      "cells": [
        "W52 BF"
      ],
      "line": 18,
      "id": "to-test-the-rightmove-web-application-functionality-to-rent;verify-if-unsigned-user-is-able-to-search-the-property-for-rent-by-using-pin-code;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 18,
  "name": "Verify if unsigned user is able to search the property for rent by using PIN code",
  "description": "",
  "id": "to-test-the-rightmove-web-application-functionality-to-rent;verify-if-unsigned-user-is-able-to-search-the-property-for-rent-by-using-pin-code;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 9,
      "name": "@ToRent"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "unsigned in user opens the rightmove url in chrome web browser",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "unsigned in user able to search \"W52 BF\" code for rent",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "invokes for rent button to search",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "unsigned in user closes the browser",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinations.unsigned_in_user_opens_the_rightmove_url_in_chrome_web_browser()"
});
formatter.result({
  "duration": 14752196783,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "W52 BF",
      "offset": 33
    }
  ],
  "location": "StepDefinations.unsigned_in_user_able_to_search_code_for_rent(String)"
});
formatter.result({
  "duration": 340256421,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinations.invokes_for_rent_button_to_search()"
});
formatter.result({
  "duration": 3011963834,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinations.unsigned_in_user_closes_the_browser()"
});
formatter.result({
  "duration": 616574535,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 21,
  "name": "Verify if unsigned user is able to search the property for rent by using radius,property type, pricerange, bedrooms \u0026 added to site",
  "description": "",
  "id": "to-test-the-rightmove-web-application-functionality-to-rent;verify-if-unsigned-user-is-able-to-search-the-property-for-rent-by-using-radius,property-type,-pricerange,-bedrooms-\u0026-added-to-site",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 20,
      "name": "@ToRent"
    }
  ]
});
formatter.step({
  "line": 22,
  "name": "unsigned in user opens the rightmove url in chrome web browser",
  "keyword": "Given "
});
formatter.step({
  "line": 23,
  "name": "unsigned in user able to search \"\u003cpin\u003e\" code for rent",
  "keyword": "When "
});
formatter.step({
  "line": 24,
  "name": "invokes for rent button to search",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "unsigned in user should land to the page with various search criteria for the \"\u003cpin\u003e\" for rent",
  "keyword": "Then "
});
formatter.step({
  "line": 26,
  "name": "unsigned in user should able to search by \"\u003cradius\u003e\", \"\u003cpropertytype\u003e\", \"\u003cminpricerange\u003e\", \"\u003cmaxpricerange\u003e\", \"\u003cminbedrooms\u003e\" ,\"\u003cmaxbedrooms\u003e\" and \"\u003caddedtosite\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "unsigned in user click on find properties",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "unsigned in user closes the browser",
  "keyword": "And "
});
formatter.examples({
  "line": 30,
  "name": "",
  "description": "",
  "id": "to-test-the-rightmove-web-application-functionality-to-rent;verify-if-unsigned-user-is-able-to-search-the-property-for-rent-by-using-radius,property-type,-pricerange,-bedrooms-\u0026-added-to-site;",
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
        "addedtosite"
      ],
      "line": 31,
      "id": "to-test-the-rightmove-web-application-functionality-to-rent;verify-if-unsigned-user-is-able-to-search-the-property-for-rent-by-using-radius,property-type,-pricerange,-bedrooms-\u0026-added-to-site;;1"
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
        "Last 3 days"
      ],
      "line": 32,
      "id": "to-test-the-rightmove-web-application-functionality-to-rent;verify-if-unsigned-user-is-able-to-search-the-property-for-rent-by-using-radius,property-type,-pricerange,-bedrooms-\u0026-added-to-site;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 32,
  "name": "Verify if unsigned user is able to search the property for rent by using radius,property type, pricerange, bedrooms \u0026 added to site",
  "description": "",
  "id": "to-test-the-rightmove-web-application-functionality-to-rent;verify-if-unsigned-user-is-able-to-search-the-property-for-rent-by-using-radius,property-type,-pricerange,-bedrooms-\u0026-added-to-site;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 20,
      "name": "@ToRent"
    }
  ]
});
formatter.step({
  "line": 22,
  "name": "unsigned in user opens the rightmove url in chrome web browser",
  "keyword": "Given "
});
formatter.step({
  "line": 23,
  "name": "unsigned in user able to search \"W5 2BF\" code for rent",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 24,
  "name": "invokes for rent button to search",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "unsigned in user should land to the page with various search criteria for the \"W5 2BF\" for rent",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 26,
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
  "line": 27,
  "name": "unsigned in user click on find properties",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "unsigned in user closes the browser",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinations.unsigned_in_user_opens_the_rightmove_url_in_chrome_web_browser()"
});
formatter.result({
  "duration": 13613869944,
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
  "duration": 103752604,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinations.invokes_for_rent_button_to_search()"
});
formatter.result({
  "duration": 2937161201,
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
  "duration": 238983956,
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
  "duration": 925468228,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinations.unsigned_in_user_click_on_find_properties()"
});
formatter.result({
  "duration": 5879172460,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinations.unsigned_in_user_closes_the_browser()"
});
formatter.result({
  "duration": 736377088,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 35,
  "name": "Verify if unsigned user is able to search the property to rent by sorting newest listed",
  "description": "",
  "id": "to-test-the-rightmove-web-application-functionality-to-rent;verify-if-unsigned-user-is-able-to-search-the-property-to-rent-by-sorting-newest-listed",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 34,
      "name": "@ToRent"
    }
  ]
});
formatter.step({
  "line": 36,
  "name": "unsigned in user opens the rightmove url in chrome web browser",
  "keyword": "Given "
});
formatter.step({
  "line": 37,
  "name": "unsigned in user able to search \"\u003cpin\u003e\" code for rent",
  "keyword": "When "
});
formatter.step({
  "line": 38,
  "name": "invokes for rent button to search",
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "unsigned in user should land to the page with various search criteria for the \"\u003cpin\u003e\" for rent",
  "keyword": "Then "
});
formatter.step({
  "line": 40,
  "name": "unsigned in user should able to search by \"\u003cradius\u003e\", \"\u003cpropertytype\u003e\", \"\u003cminpricerange\u003e\", \"\u003cmaxpricerange\u003e\", \"\u003cminbedrooms\u003e\" ,\"\u003cmaxbedrooms\u003e\" and \"\u003caddedtosite\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "unsigned in user click on find properties",
  "keyword": "And "
});
formatter.step({
  "line": 42,
  "name": "usigned in user should be able to land in properties listed page for the mentioned \"\u003cpin\u003e\" to rent",
  "keyword": "Then "
});
formatter.step({
  "line": 43,
  "name": "unsigned in user should be able to sort property by \"\u003csortingtype\u003e\" listed",
  "keyword": "And "
});
formatter.step({
  "line": 44,
  "name": "unsigned in user closes the browser",
  "keyword": "And "
});
formatter.examples({
  "line": 46,
  "name": "",
  "description": "",
  "id": "to-test-the-rightmove-web-application-functionality-to-rent;verify-if-unsigned-user-is-able-to-search-the-property-to-rent-by-sorting-newest-listed;",
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
      "line": 47,
      "id": "to-test-the-rightmove-web-application-functionality-to-rent;verify-if-unsigned-user-is-able-to-search-the-property-to-rent-by-sorting-newest-listed;;1"
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
      "line": 48,
      "id": "to-test-the-rightmove-web-application-functionality-to-rent;verify-if-unsigned-user-is-able-to-search-the-property-to-rent-by-sorting-newest-listed;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 48,
  "name": "Verify if unsigned user is able to search the property to rent by sorting newest listed",
  "description": "",
  "id": "to-test-the-rightmove-web-application-functionality-to-rent;verify-if-unsigned-user-is-able-to-search-the-property-to-rent-by-sorting-newest-listed;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 34,
      "name": "@ToRent"
    }
  ]
});
formatter.step({
  "line": 36,
  "name": "unsigned in user opens the rightmove url in chrome web browser",
  "keyword": "Given "
});
formatter.step({
  "line": 37,
  "name": "unsigned in user able to search \"W5 2BF\" code for rent",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 38,
  "name": "invokes for rent button to search",
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "unsigned in user should land to the page with various search criteria for the \"W5 2BF\" for rent",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 40,
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
  "line": 41,
  "name": "unsigned in user click on find properties",
  "keyword": "And "
});
formatter.step({
  "line": 42,
  "name": "usigned in user should be able to land in properties listed page for the mentioned \"W5 2BF\" to rent",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 43,
  "name": "unsigned in user should be able to sort property by \"Newest Listed\" listed",
  "matchedColumns": [
    8
  ],
  "keyword": "And "
});
formatter.step({
  "line": 44,
  "name": "unsigned in user closes the browser",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinations.unsigned_in_user_opens_the_rightmove_url_in_chrome_web_browser()"
});
formatter.result({
  "duration": 13029113736,
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
  "duration": 97426421,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinations.invokes_for_rent_button_to_search()"
});
formatter.result({
  "duration": 2764591228,
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
  "duration": 48640253,
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
  "duration": 796983406,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinations.unsigned_in_user_click_on_find_properties()"
});
formatter.result({
  "duration": 3774004419,
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
  "duration": 13912068,
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
  "duration": 147649447,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinations.unsigned_in_user_closes_the_browser()"
});
formatter.result({
  "duration": 654744481,
  "status": "passed"
});
formatter.scenarioOutline({
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
  "duration": 18472063861,
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
  "duration": 148474969,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinations.invokes_for_rent_button_to_search()"
});
formatter.result({
  "duration": 6776173537,
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
  "duration": 65242632,
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
  "duration": 945355742,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinations.unsigned_in_user_click_on_find_properties()"
});
formatter.result({
  "duration": 7632784234,
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
  "duration": 8659065,
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
  "duration": 84579947,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinations.unsigned_in_user_able_to_click_the_new_listed_to_rent_property()"
});
formatter.result({
  "duration": 9625455822,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinations.the_new_listed_property_page_should_open()"
});
formatter.result({
  "duration": 58472898,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinations.unsigned_in_user_closes_the_browser()"
});
formatter.result({
  "duration": 641374134,
  "status": "passed"
});
});