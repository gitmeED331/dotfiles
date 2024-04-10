import Quickshell
import Powerbtn.qml

Scope {
  // no more time object

  Variants {
    model: Quickshell.screens

    PanelWindow {
      property var modelData
      screen: modelData

      anchors {
        bottom: true
        left: true
        right: true
      }

      height: 20

      ClockWidget {
        anchors.centerIn: parent
      }
      
      Powerbtn{screen: Quickshell.screens[0]}
    }
  }
}
