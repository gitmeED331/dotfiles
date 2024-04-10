import QtQuick
import QtQuick.Layouts
import QtQuick.Particles
import QtQuick.Effects
import QtQuick.Shapes
import QtQuick.Controls
import Quickshell
import Quickshell.Io
import Quickshell.Wayland

ShellRoot {
	id: root
	
	Socket {
		// Create and connect a Socket to the hyprland event socket.
		// https://wiki.hyprland.org/IPC/
		path: `/tmp/hypr/${Quickshell.env("HYPRLAND_INSTANCE_SIGNATURE")}/.socket2.sock`
		connected: true

		parser: SplitParser {
			// Regex that will return the newly focused monitor when it changes.
			property var regex: new RegExp("focusedmon>>(.+),.*");

			// Sent for every line read from the socket
			onRead: msg => {
				const match = regex.exec(msg);

				if (match != null) {
					// Filter out the right screen from the list and update the panel.
					// match[1] will always be the monitor name captured by the regex.
					panel.screen = Quickshell.screens.filter(screen => screen.name == match[1])[0];
				}
			}
		}
	}
	
	Bar {screen: Quickshell.screens[0]}
	
}
