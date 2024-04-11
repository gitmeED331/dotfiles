import QtQuick

Item {
  // we no longer need time as an input

  implicitWidth: childrenRect.width
  implicitHeight: childrenRect.height

  property var locale: Qt.locale()
     property date currentTime: new Date()

  Text {
    text: new Date().toLocaleString(locale, "ddd dd-MMM-yyyy HH:mm:ss")
    }
}

