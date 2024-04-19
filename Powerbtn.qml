import QtQuick
import QtQuick.Controls
import QtQuick.Controls.Material
import QtQuick.Shapes
import QtQuick.Effects
import QtQuick.Particles
import Quickshell

import "./Powermenu.qml"

ToolButton {
    id: powerbtn
    implicitWidth: powertxt.width * 2
    implicitHeight: powertxt.height * 2
    Text {
        id: powertxt
        anchors.centerIn: parent
        text: qsTr("power")
        font {
            bold: true
            pixelSize: 15
        }
        style: Text.Outline; styleColor: "red"
        color: "steelblue"
        fontSizeMode: Text.Fit
        minimumPixelSize: 15
        horizontalAlignment: Qt.AlignHCenter
        verticalAlignment: Qt.AlignVCenter
    }

    background: Rectangle {
        anchors.fill: parent
        implicitHeight: powertxt.height * 1.5
        implicitWidth: powertxt.width * 1.5
        color: powerbtn.down ? "#0000FF" : "#c3f54g"
        border.color: powerbtn.down ? "#26282a" : "#c3f54g"
        border.width: 3
        radius: 20
        topRightRadius: 0
        topLeftRadius: 20
        bottomRightRadius: 0
        bottomLeftRadius: 20
    }

    onClicked: Powermenu.loading = true
        LazyLoader {
            id:lazypm
            source: "Powermenu.qml"

            PopupWindow {
               parentWindow: toplevel
               relativeX: parentWindow.width / 2
               relativeY: parentWindow.height * 2
               width: 500
               height: 500
               visible: true
          }
    }
}
