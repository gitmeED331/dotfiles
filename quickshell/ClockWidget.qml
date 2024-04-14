import Quickshell
import QtQuick
import QtQuick.Shapes
import QtQuick.Effects
import QtQuick.Controls
import QtQuick.Controls.Material
import QtQuick.Layouts

Item {
    property var locale: Qt.locale()
    property date currentTime: new Date()

    Rectangle {
        id: clockcont
        height: parent.height / 2
        width: parent.width / 6
        anchors.fill: parent
        color: Qt.rgba(0, 0, 0, 0.5)
    GridLayout {
        columns:1
        rows: 2
        anchors.fill: parent
        width: bar.width / 3
        height: bar.height /2
        Layout.fillHeight: true
        Layout.alignment: Qt.AlignCenter
            Text {
                text: { new Date().toLocaleString(locale, "HH:mm:ss") }
                style: Text.Outline
                styleColor: "Red"
                fontSizeMode: Text.VerticalFit
                minimumPixelSize: 15
                Layout.row: 0
                height: 20
                width: 100
                Layout.fillWidth: true
                Layout.minimumWidth: bar.width / 6
                Layout.minimumHeight: clockcont.height
            }
            Text {
                text: { new Date().toLocaleString(locale, "ddd dd-MMM-yyyy") }
                style: Text.Raised
                styleColor: "steelblue"
                fontSizeMode: Text.VerticalFit
                minimumPixelSize: 15
                height: 20
                width: 100
                Layout.row: 1
                Layout.fillWidth: true
                Layout.minimumWidth: bar.width / 6
                Layout.minimumHeight: bar.height / 2
            }
    }
}
}
