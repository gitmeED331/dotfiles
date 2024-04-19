import QtQuick
import QtQuick.Controls
import Quickshell

ShellRoot {
  PanelWindow {
    id: window
    height: 50

    anchors {
      bottom: true
      left: true
      right: true
    }

    LazyLoader {
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
      anchors.centerIn: parent
      text: "show popup"

      // accessing popupLoader.item will force the loader to
      // finish loading on the UI thread if it isn't finished yet.
      onClicked: popupLoader.item.visible = !popupLoader.item.visible
    }
  }
}
