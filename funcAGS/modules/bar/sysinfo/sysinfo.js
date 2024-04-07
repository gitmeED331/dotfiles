import { Widget, Utils, Hyprland } from "../../../imports.js"
//import{ NetWidget, WifiBTN } from "./network.js"
//import{ BluetoothWidget } from "./bluetooth.js"
import{ Volume, Dashvol } from "./volume.js"
import{ BatteryWidget } from "./battery.js"
import { Notification } from "./notification.js"

const { Box } = Widget;
const { exec, execAsync } = Utils;

App.config({
	windows: [
		Dashvol(),
		//NetWidget(),
		],
});
			
export const SysInfo = () => Box({
	hexpand: true,
    class_name: 'sysinfo',
	spacing: 8,
		children: [
		//BluetoothWidget(),
		Volume(),
		BatteryWidget(),
		//WifiBTN(),
		//Notification(),
        ]
    });
