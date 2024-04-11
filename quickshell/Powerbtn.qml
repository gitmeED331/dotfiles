import QtQuick
import QtQuick.Controls
import QtQuick.Controls.Material
import Quickshell


Button {
    id: powerbtn
    text: "power"
    onClicked: Powermenu.loading = true

    LazyLoader {
        source: "Powermenu.qml"
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
}
