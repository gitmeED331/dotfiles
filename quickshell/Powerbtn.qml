import QtQuick
import QtQuick.Controls
import QtQuick.Controls.Material
import Quickshell


ShellRoot {
  PanelWindow {
    id: powermenupopup
    height: 50

    anchors {
      bottom: true
      left: true
      right: true
    }

LazyLoader { source: "Powermenu.qml"
  id: popupLoader

  // start loading immediately
  loading: true

  // this window will be loaded in the background during spare
  // frame time unless active is set to true, where it will be
  // loaded in the foreground
  PopupWindow {
    // position the popup above the button
    parentWindow: window
    relativeX: window.width / 2 - width / 2
    relativeY: -height

    // some heavy component here

    width: 200
    height: 200
  }
}

Button {
    id:powerbtn
  anchors.centerIn: parent
  text: "power"

  // accessing popupLoader.item will force the loader to
  // finish loading on the UI thread if it isn't finished yet.
  onClicked: popupLoader.item.visible = !popupLoader.item.visible
}
  }}
