import Quickshell
import QtQuick
import QtQuick.Shapes
import QtQuick.Effects
import QtQuick.Controls
import QtQuick.Controls.Material
import QtQuick.Layouts
import Quickshell.Services.Pipewire

FloatingWindow {
		// match the system theme background color
		color: contentItem.palette.active.window

		ScrollView {
			anchors.fill: parent
			contentWidth: availableWidth

			ColumnLayout {
				anchors.fill: parent
				anchors.margins: 10

				// get a list of nodes that output to the default sink
				PwNodeLinkTracker {
					id: linkTracker
					node: Pipewire.defaultAudioSink
				}

				MixerEntry {
					node: Pipewire.defaultAudioSink
				}

				Rectangle {
					Layout.fillWidth: true
					color: palette.active.text
					implicitHeight: 1
				}

				Repeater {
					model: linkTracker.linkGroups

					MixerEntry {
						required property PwLinkGroup modelData
						// Each link group contains a source and a target.
						// Since the target is the default sink, we want the source.
						node: modelData.source
					}
				}
			}
		}
	}

ColumnLayout {
	required property PwNode node;

	// bind the node so we can read its properties
	PwObjectTracker { objects: [ node ] }

	RowLayout {
		Image {
			visible: source != ""
			source: {
				const icon = node.properties["application.icon-name"] ?? "audio-volume-high-symbolic";
				return `image://icon/${icon}`;
			}

			sourceSize.width: 20
			sourceSize.height: 20
		}

		Label {
			text: {
				// application.name -> description -> name
				const app = node.properties["application.name"] ?? (node.description != "" ? node.description : node.name);
				const media = node.properties["media.name"];
				return media != undefined ? `${app} - ${media}` : app;
			}
		}

		Button {
			text: node.audio.muted ? "unmute" : "mute"
			onClicked: node.audio.muted = !node.audio.muted
		}
	}

	RowLayout {
		Label {
			Layout.preferredWidth: 50
			text: `${Math.floor(node.audio.volume * 100)}%`
		}

		Slider {
			Layout.fillWidth: true
			value: node.audio.volume
			onValueChanged: node.audio.volume = value
		}
	}
}
