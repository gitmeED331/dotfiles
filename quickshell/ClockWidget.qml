import QtQuick

Item {
  // we no longer need time as an input

  width: childrenRect.width
  height: childrenRect.height

  Text {
    // directly access the time property from the Time singleton
    text: Time.time
  }
}
