import Quickshell
import QtQuick
import QtQuick.Shapes
import QtQuick.Effects
import QtQuick.Controls
import QtQuick.Controls.Material
import QtQuick.Layouts


import "./Powerbtn.qml"

Scope {

  Variants {
    model: Quickshell.screens

    PanelWindow {
      property var modelData
      screen: modelData
      Material.background: Material.Blue

      anchors {
        bottom: true
        left: true
        right: true
      }

      height: 100
//-----------------------
RowLayout {
    id: rightside
    anchors {
        //right: parent.right
        centerIn: parent
        verticalCenter: parent.verticalCenter
    }
    Layout.rightMargin: 3

    ClockWidget {
        id: clockwidget
        }

    Powerbtn {
        id: powerbtn
    }
} //RowLayout end
//---------------
  }
 }
}
