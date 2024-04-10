import { Widget, Utils, Mpris, Hyprland } from "../../imports.js";
import PopupWindow from "../../utils/popupWindow.js";
import { Muppet } from "./player.js";

const mpris = await Service.import("mpris");

const { Window, Box, CenterBox, Button, Icon, Label, EventBox } = Widget;
const { execAsync } = Utils;
const player = Mpris.getPlayer();
/*
const Previous = () => Button({
	hpack: 'start',
	class_name: 'previous',
	child:
		Widget.Label({ 
		label: '⇜'
		}),
	on_primary_click: () => Mpris.getPlayer('').previous(),
});

const Next = () => Button({
	hpack: 'end',
	class_name: 'next',
	child:
		Widget.Label({ 
		label: '⇝'
		}),
	on_primary_click: ( ) => Mpris.getPlayer('').next(),
});
*/

export const Playwin = () =>  PopupWindow({
    name: "playwin",
    anchor: [ "top" ],
    margins: [3,0,0,0],
    layer: "overlay",
    transition: "slide_down",
    transitionDuration: 150,
    child: Box({
		vexpand: true,
		hexpand: true,
		className: "playwin",
		child: Muppet(),
	})
});

export const MediaBTN = ( ) => Box({
	child: Button({
		vpack: 'center',
		className: 'mediabtn',
		onPrimaryClick: ( ) => App.toggleWindow("playwin"),
		onSecondaryClickRelease: ( ) => { Hyprland.messageAsync('dispatch exec deezer') },
		child: Label('-').hook(Mpris, self => {
			if (Mpris.players[0]) {
				const { track_title } = Mpris.players[0];
				self.label = track_title.length > 60 ? `${track_title.substring(0, 60)}...` : track_title;
			} 
			else {
				self.label = 'Nothing is playing';
			}
		}, 'player-changed'),
	})
});
