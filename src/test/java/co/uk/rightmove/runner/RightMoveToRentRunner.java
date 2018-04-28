package co.uk.rightmove.runner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith (Cucumber.class)
@CucumberOptions(plugin={"pretty", "html:target/cucumber-reports"}, features = "src/test/resources/features", 
						glue="co.uk.rightmove.steps", monochrome = true, tags = {"@ToRent"})

public class RightMoveToRentRunner {

}
