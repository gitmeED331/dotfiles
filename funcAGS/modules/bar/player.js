import { Widget, Utils, Mpris, Hyprland } from "../../imports.js";
const { Window, Box, CenterBox, Button, Icon, Label } = Widget;

// Widgets
import { Workspaces	} from "./workspaces.js";
import { Title } from "./title.js";
//import { Media } from "./media.js";
import { PlayerWin } from "./player.js";
import { SysInfo } from	"./sysinfo/sysinfo.js";
import Tray from "./tray.js";
import { Clock } from "./clock.js";
import { Dashboard } from "../../modules/dashboard/dashboard.js";
import Audio from "resource:///com/github/Aylur/ags/service/audio.js";

App.config({
	windows: [
		Dashboard(),
		PlayerWin(),
		],
});

const Dash = ()	=> Button({
			class_name: 'dashbtn',
			onClicked: () => App.toggleWindow("dashboard"),
			child: Icon({ icon: 'alienarena'}),
		});

const Media = () => Button({
	class_name: 'media',
	onPrimaryClick: () => App.toggleWindow("PlayerWin"),
	/*const player = Mpris.getPlayer()
	if(!player) {
		Hyprland.messageAsync('dispatch exec deezer')
	}
		else {
			player.playPause()
		} */
	onSecondaryClickRelease: () => hyprland.messageAsync('dispatch exec anyrun'),
	child: Label('-').hook(Mpris, self => {
		if (Mpris.players[0]) {
			const { track_title } = Mpris.players[0];
			self.label = track_title.length > 60 ? `${track_title.substring(0, 60)}...` : track_title;
		} else {
			self.label = 'Nothing is playing';
		}
	}, 'player-changed'),
});

const Left = ()	=> Box({
	hpack:	"start",
	children: [Workspaces(), Title()],
});
const Center = () => Box({
	hpack:	"center",
	children: [ Media() ],
});
const Right	= () =>	Box({
	hpack:	"end",
	children: [
		Tray(),
		SysInfo(),
		Clock(),
		Dash(),
	],
});

export const Bar = () => Widget.Window({
	name: "bar",
	layer:	'top',
	anchor: ["top", "left", "right"],
	margins: [0, 0, 0,	5],
	exclusivity: "exclusive",
	child:	CenterBox({
		className: "bar",
		hexpand: true,
		start_widget:	Left(),
		center_widget: Center(),
		end_widget: Right(),
	}),
});
