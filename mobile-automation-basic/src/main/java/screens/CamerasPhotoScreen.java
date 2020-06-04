package screens;

import general.AppiumElement;
import general.ScreenManager;
import io.appium.java_client.AppiumDriver;

public class CamerasPhotoScreen extends BaseScreen {
  // Constructor
  public CamerasPhotoScreen(AppiumDriver driver) {
    super(driver);


    addElement("camcorders", "xpath","//*[@text='Camcorders']");
    addElement("cameraDrones", "xpath","//*[@text='Camera Drones']");
    addElement("digitalCameras", "xpath","//*[@text='Digital Cameras']");
    addElement("filmPhotography", "xpath","//*[@text='Film Photography']");

  }
  // Base Methods
  @Override
  public AppiumElement getMainElement(){
    return getElement("camcorders");
  }


  @Override
  public void navigate(String element){
    switch (element){
      case "digitalCameras" : ScreenManager.setCurrentPage(ScreenManager.getDigCamScreen());break;
      default          : super.navigate(element);
    }
  }

}