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
    implicitWidth: 200
    Rectangle {
        id: clockcont
        anchors.fill: parent
        color: Qt.rgba(0, 0, 0,0.75 )

    ColumnLayout {
        anchors.fill: parent
        Layout.fillHeight: true
        Layout.fillWidth: true
        Layout.alignment: Qt.AlignCenter
        Text {
            id: time
                text: { new Date().toLocaleString(locale, "HH:mm:ss") }
                style: Text.Outline
                styleColor: "Red"
                fontSizeMode: Text.VerticalFit
                minimumPixelSize: 15
                Layout.row: 0
                Layout.minimumWidth: parent.width
                Layout.alignment: Qt.AlignCenter
                horizontalAlignment: Qt.AlignHCenter
                verticalAlignment: Qt.AlignVCenter
            }
            Text {
                id: today
                text: { new Date().toLocaleString(locale, "ddd dd-MMM-yyyy") }
                style: Text.Raised
                styleColor: "steelblue"
                fontSizeMode: Text.VerticalFit
                minimumPixelSize: 15
                Layout.row: 1
                Layout.fillWidth: true
                Layout.minimumWidth: parent.width
                Layout.alignment: Qt.AlignCenter
                horizontalAlignment: Qt.AlignHCenter
                verticalAlignment: Qt.AlignVCenter
            }
    }
}
}
