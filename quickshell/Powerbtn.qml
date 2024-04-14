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
    width: 100
    Text {
        id: powertxt
        anchors.centerIn: parent
        width: parent.width / 2
        height: parent.height / 2
        text: qsTr("power")
        font {
            bold: true
            pixelSize: 100
        }
        style: Text.Outline; styleColor: "red"
        color: "steelblue"
        fontSizeMode: Text.Fit
        minimumPixelSize: 10
        horizontalAlignment: Qt.AlignHCenter
        verticalAlignment: Qt.AlignVCenter
        elide: Text.ElideMiddle
    }

    background: Rectangle {
        implicitHeight: 30
        implicitWidth: powertxt
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
