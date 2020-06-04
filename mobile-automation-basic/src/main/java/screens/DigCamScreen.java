package screens;

import general.AppiumElement;
import general.ScreenManager;
import io.appium.java_client.AppiumDriver;

public class DigCamScreen extends BaseScreen {
  // Constructor
  public DigCamScreen(AppiumDriver driver) {
    super(driver);


    addElement("nikon", "xpath","//*[@text='Nikon']");
    addElement("nikonD", "xpath","//*[@text='Nikon D']");
    addElement("nikonD5600", "xpath","//*[@text='Nikon D5600']");
    addElement("limitedTimeDeals", "xpath","//*[@text='Limited Time Deals']");
    addElement("hotThisWeek", "xpath","//*[@text='Hot This Week']");

  }
  // Base Methods
  @Override
  public AppiumElement getMainElement(){
    return getElement("nikon");
  }
}


