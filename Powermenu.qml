import QtQuick
import Quickshell
import Quickshell.Io

ShellRoot {
    id: pmbtns
	WLogout {
		LogoutButton {
			command: "loginctl lock-screen"
			keybind: Qt.Key_K
			text: "Lock"
			icon: "lock"
		}

		LogoutButton {
			command: "loginctl terminate-user $USER"
			keybind: Qt.Key_E
			text: "Logout"
			icon: "logout"
		}

		LogoutButton {
			command: "systemctl suspend"
			keybind: Qt.Key_U
			text: "Suspend"
			icon: "suspend"
		}

		LogoutButton {
			command: "systemctl hibernate"
			keybind: Qt.Key_H
			text: "Hibernate"
			icon: "hibernate"
		}

		LogoutButton {
			command: "systemctl poweroff"
			keybind: Qt.Key_K
			text: "Shutdown"
			icon: "shutdown"
		}

		LogoutButton {
			command: "systemctl reboot"
			keybind: Qt.Key_R
			text: "Reboot"
			icon: "reboot"
		}
	}
}
