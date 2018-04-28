package co.uk.rightmove.main;

import static org.hamcrest.Matchers.equalTo;
import static org.junit.Assert.assertThat;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.util.Properties;
import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.ui.Select;

public class StepMethods {
	WebDriver driver;
	public StepMethods(WebDriver driver) {
		this.driver=driver;   
	}
	public void user_opens_rightmove_url() {
		File file = new File("src/main/resources/url.properties");
		FileInputStream fileInput = null;
		try {
			fileInput = new FileInputStream(file);
		} catch (FileNotFoundException e) {
			e.printStackTrace();
		}
		Properties prop = new Properties();
		try {
			prop.load(fileInput);
		} catch (IOException e) {
			e.printStackTrace();
		}
		driver.manage().deleteAllCookies();
		driver.get(prop.getProperty("url"));
		driver.manage().timeouts().implicitlyWait(120, TimeUnit.SECONDS);
		driver.manage().window().maximize();
	}
	public void user_check_web_title_assertion() {
		String ActualTitle = driver.getTitle();
		String ExpectedTitle ="Rightmove - UK's number one property website for properties for sale and to rent";
		assertThat(ActualTitle, equalTo(ExpectedTitle));
	}
	public void user_search_using_pin_code(String code) {
		driver.findElement(By.id("searchLocation")).sendKeys(code);
	}
	public void user_clicks_on_submit_button_for_sale() {
		driver.findElement(By.id("buy")).submit();
	}
	public void user_clicks_on_submit_button_for_rent() {
		driver.findElement(By.id("rent")).click();
	}
	public void user_check_web_title_assertion_for_sale(String pincode) {
		String ActualTitle = driver.findElement(By.xpath("//*[@id=\'headerTitle\']")).getText();
		String ExpectedTitle ="property for sale in "+pincode;
		assertThat(ActualTitle, equalTo(ExpectedTitle));
	}
	public void user_check_web_title_assertion_for_rent(String pincode) {
		String ActualTitle = driver.findElement(By.xpath("//*[@id='headerTitle']")).getText();
		String ExpectedTitle ="property to rent in "+pincode;
		assertThat(ActualTitle, equalTo(ExpectedTitle));
	}
	public void user_search_using_various_attributes(String radius, String propertytype, String minpricerange, String maxpricerange, String minbedrooms, String maxbedrooms, String addedtosite)  {
		Select SC_Radius = new Select(driver.findElement(By.id("radius")));
		SC_Radius.selectByVisibleText(radius);
		Select SC_Protype = new Select(driver.findElement(By.id("displayPropertyType")));
		SC_Protype.selectByVisibleText(propertytype);
		Select SC_MinPriceRange = new Select(driver.findElement(By.id("minPrice")));
		SC_MinPriceRange.selectByVisibleText(minpricerange);
		Select SC_MaxPriceRange = new Select(driver.findElement(By.id("maxPrice")));
		SC_MaxPriceRange.selectByVisibleText(maxpricerange);
		Select SC_MinBedrooms = new Select(driver.findElement(By.id("minBedrooms")));
		SC_MinBedrooms.selectByVisibleText(minbedrooms);
		Select SC_MaxBedrooms = new Select(driver.findElement(By.id("maxBedrooms")));
		SC_MaxBedrooms.selectByVisibleText(maxbedrooms);
		Select SC_AddedtoSite = new Select(driver.findElement(By.id("maxDaysSinceAdded")));
		SC_AddedtoSite.selectByVisibleText(addedtosite);
	}
	public void user_submits_for_find_properties() {
		driver.findElement(By.id("submit")).submit();
	}
	public void user_checks_listed_page_title(String pincode) {
		String ActualTitle = driver.getTitle();
		String ExpectedTitle ="Bungalows For Sale in "+pincode+ " - Rightmove";
		assertThat(ActualTitle, equalTo(ExpectedTitle));
	}
	public void user_checks_listed_page_title_to_rent(String pincode) {
		String ActualTitle = driver.getTitle();
		String ExpectedTitle ="Bungalows To Rent in "+pincode+ " - Rightmove";
		assertThat(ActualTitle, equalTo(ExpectedTitle));
	}
	public void user_clicks_on_newly_listed_property(){
		driver.findElement(By.cssSelector("#l-searchResults > div:nth-child(2) > div > div.propertyCard-wrapper > div.propertyCard-content.propertyCard-distance--show > div.propertyCard-section")).click();
	}
	public void user_clicks_on_newly_listed_property_to_rent(){
		driver.findElement(By.cssSelector("#l-searchResults > div:nth-child(2) > div > div.propertyCard-wrapper > div.propertyCard-content.propertyCard-distance--show > div.propertyCard-section > div.propertyCard-details > a > h2")).click();
	}
	public void user_view_the_newly_listed_property() {
		String Actual = driver.findElement(By.xpath("//*[contains(text(),'Back to property listing')]")).getText();
		String Expected ="Back to property listings";
		assertThat(Actual, equalTo(Expected));
	}
	public void user_sorts_using_newest_on_top(String sortingtype) {
		Select SC_SortingType = new Select(driver.findElement(By.id("sortType")));
		SC_SortingType.selectByVisibleText(sortingtype);
	}
	public void user_closes_the_browser() {
		driver.quit();
	}

}
