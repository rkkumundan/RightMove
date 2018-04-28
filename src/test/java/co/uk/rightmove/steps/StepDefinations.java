package co.uk.rightmove.steps;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import co.uk.rightmove.main.StepMethods;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class StepDefinations {
	public WebDriver driver = new ChromeDriver();
	StepMethods SM = new StepMethods(driver);
	@Given("^unsigned in user opens the rightmove url in chrome web browser$")
	public void unsigned_in_user_opens_the_rightmove_url_in_chrome_web_browser() throws Throwable {
	  SM.user_opens_rightmove_url();
	}
	@Then("^unsigned in user should be able to see the page$")
	public void unsigned_in_user_should_be_able_to_see_the_page() throws Throwable {
	  SM.user_check_web_title_assertion();
	}
	@Then("^unsigned in user able to search \"(.*?)\" code for sale$")
	public void unsigned_in_user_able_to_search_code_for_sale(String pincode) throws Throwable {
	  SM.user_search_using_pin_code(pincode);
	}
	@Then("^unsigned in user able to search \"([^\"]*)\" code for rent$")
	public void unsigned_in_user_able_to_search_code_for_rent(String pincode) throws Throwable {
	 SM.user_search_using_pin_code(pincode);
	}
	@Then("^invokes for sale button to search$")
	public void invokes_for_sale_button_to_search() throws Throwable {
	   SM.user_clicks_on_submit_button_for_sale();
	}
	@Then("^invokes for rent button to search$")
	public void invokes_for_rent_button_to_search() throws Throwable {
	    SM.user_clicks_on_submit_button_for_rent();
	}
	@Then("^unsigned in user should land to the page with various search criteria for the \"(.*?)\"$")
	public void unsigned_in_user_should_land_to_the_page_with_various_search_criteria_for_the(String pincode) throws Throwable {
	    SM.user_check_web_title_assertion_for_sale(pincode);
	}
	@Then("^unsigned in user should able to search by \"(.*?)\", \"(.*?)\", \"(.*?)\", \"(.*?)\", \"(.*?)\" ,\"(.*?)\" and \"(.*?)\"$")
	public void unsigned_in_user_should_able_to_search_by_and(String radius, String propertytype, String minpricerange, String maxpricerange, String minbedrooms, String maxbedrooms, String addedtosite) throws Throwable {
	    SM.user_search_using_various_attributes(radius, propertytype, minpricerange, maxpricerange, minbedrooms, maxbedrooms, addedtosite);
	}
	@Then("^unsigned in user click on find properties$")
	public void unsigned_in_user_click_on_find_properties() throws Throwable {
	    SM.user_submits_for_find_properties();
	}
	@Then("^usigned in user should be able to land in properties listed page for the mentioned \"(.*?)\"$")
	public void usigned_in_user_should_be_able_to_land_in_properties_listed_page_for_the_mentioned(String pin) throws Throwable {
	    SM.user_checks_listed_page_title(pin);
	}
	@Then("^usigned in user should be able to land in properties listed page for the mentioned \"([^\"]*)\" to rent$")
	public void usigned_in_user_should_be_able_to_land_in_properties_listed_page_for_the_mentioned_to_rent(String pin) throws Throwable {
		SM.user_checks_listed_page_title_to_rent(pin);
	}
	@Then("^unsiged in user should be able to sort property by \"(.*?)\" listed$")
	public void unsiged_in_user_should_be_able_to_sort_property_by_listed(String sortingtype) throws Throwable {
	    SM.user_sorts_using_newest_on_top(sortingtype);
	}
	@When("^unsiged in user able to click the new listed property$")
	public void unsiged_in_user_able_to_click_the_new_listed_property() throws Throwable {
	    SM.user_clicks_on_newly_listed_property();
	}
	@Then("^unsiged in user able to click the new listed to rent property$")
	public void unsiged_in_user_able_to_click_the_new_listed_to_rent_property() throws Throwable {
		SM.user_clicks_on_newly_listed_property_to_rent();
	}

	@Then("^the new listed property page should open$")
	public void the_new_listed_property_page_should_open() throws Throwable {
		SM.user_view_the_newly_listed_property();
	}
	@Then("^unsigned in user should land to the page with various search criteria for the \"([^\"]*)\" for rent$")
	public void unsigned_in_user_should_land_to_the_page_with_various_search_criteria_for_the_for_rent(String code) throws Throwable {
	   SM.user_check_web_title_assertion_for_rent(code);
	}
	@Then("^unsigned in user closes the browser$")
	public void unsigned_in_user_closes_the_browser() throws Throwable {
	   SM.user_closes_the_browser();
	}
}
