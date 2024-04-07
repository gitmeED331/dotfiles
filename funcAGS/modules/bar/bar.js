import { Widget	} from "../../imports.js";
const {	Window,	Box, CenterBox,	Button,	Icon } = Widget;

// Widgets
import { Workspaces	} from "./workspaces.js";
import { Title } from "./title.js";
import { Media } from "./media.js";
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

