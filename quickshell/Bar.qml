import Quickshell
import QtQuick
import QtQuick.Shapes
import QtQuick.Effects
import QtQuick.Controls
import QtQuick.Controls.Material
import QtQuick.Layouts

PanelWindow {
    id: bar

    anchors {
        bottom: true
        left: true
        right: true
    }

    height: 100

    // Layout Start-----------------------
    Rectangle {
        anchors.fill: parent
        gradient: Gradient {
            GradientStop { position: 0; color: "#0f9bff" }
            GradientStop { position: 1; color: "#000000" }
            GradientStop { position: 2; color: "#000000" }
            GradientStop { position: 3; color: "#0f9bff" }
        }
        GridLayout {
            rows: 1
            columns: 3
            Layout.fillHeight: true
            Layout.fillWidth: true
            anchors.fill: parent
            layoutDirection: Qt.LeftToRight
            Layout.margins: 3
            RowLayout {
                id: barleft
                Layout.column: 0
                Rectangle {
                    Layout.fillWidth: true
                    color: "cyan"
                    Layout.minimumWidth: bar.width / 3
                    Layout.minimumHeight: bar.height
                    ClockWidget{}
                }
            }
            RowLayout {
                id: barcenter
                Layout.column: 1
                Rectangle {
                    Layout.fillWidth: true
                    Layout.minimumWidth: bar.width / 3
                    Layout.minimumHeight: bar.height
                    color: "green"
                    ClockWidget{}
                }
            }
            RowLayout {
                id: barright
                Layout.column: 2
                layoutDirection: Qt.LeftToRight
                Rectangle {
                    Layout.alignment: Qt.AlignRight
                    Layout.minimumWidth: bar.width / 6
                    Layout.minimumHeight: bar.height
                    Layout.fillWidth: true
                    color: "yellow"
                    ClockWidget{}
                }
                Rectangle {
                    Layout.alignment: Qt.AlignRight
                    Layout.fillWidth: true
                    Layout.minimumWidth: bar.width / 6
                    Layout.minimumHeight: bar.height
                    Layout.column: 1
                    color: "pink"
                    Powerbtn{  }
                }
            }
        }
    }//Layout end
    //---------------
}
