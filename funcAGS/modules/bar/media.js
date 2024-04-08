import { Widget, Utils, Mpris, Hyprland } from "../../imports.js";
import PopupWindow from "../../utils/popupWindow.js";
import { PlayerWin } from "./player.js";

const mpris = await Service.import("mpris");

const { Window, Box, CenterBox, Button, Icon, Label } = Widget;
const { execAsync } = Utils;

/*export const Previous = () => Button({
	class_name: 'previous',
	child:
		Widget.Label({ 
		label: '⇜'
		}),
	on_primary_click: () => Mpris.getPlayer('').previous(),
});

export const Next = () => Button({
	class_name: 'next',
	child:
		Widget.Label({ 
		label: '⇝'
		}),
	on_primary_click: () => Mpris.getPlayer('').next(),
});*/

const MediaBTN = () => Button({
	name: 'mediabtn',
	onPrimaryClick: () =>  App.toggleWindow("PlayerWin"),
	/*const player = Mpris.getPlayer()
	if(!player) {
		Hyprland.messageAsync('dispatch exec deezer')
	}
		else {
			player.playPause()
		}*/
	onSecondaryClickRelease: () => {
		hyprland.messageAsync('dispatch exec anyrun')
		},
	child: Label('-').hook(Mpris, self => {
		if (Mpris.players[0]) {
			const { track_title } = Mpris.players[0];
			self.label = track_title.length > 60 ? `${track_title.substring(0, 60)}...` : track_title;
		} else {
			self.label = 'Nothing is playing';
		}
	}, 'player-changed'),
});

export const Media = () => Box({
	class_name: 'media',
	vertical:true,
	vexpand:true,
	child: MediaBTN(), 
});
