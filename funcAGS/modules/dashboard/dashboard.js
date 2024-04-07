import { Widget, Utils } from "../../imports.js";
import PopupWindow from "../../utils/popupWindow.js";
import { PowerIcon, TerminalIcon, KontactIcon, VPNIcon, Enpass } from "./iconButtons.js";
/*import { WiFi } from "./wifi.js";
import { BluetoothWidget } from "./bluetooth.js";*/
import { BrightnessSlider }  from "./brightnessSlider.js";
import { NotificationList } from "./notificationList.js";
const { Box } = Widget;
const { execAsync } = Utils;

const quickAccess = Box({
	children: [
		Box({
			vexpand: true,
			vpack: 'center',
			hpack: 'start',
			children: [
				Enpass(),
				KontactIcon(),
				VPNIcon(),
				TerminalIcon(),
			]
		}),
        Box({
			hexpand: true,
			hpack: 'end',
			vpack: 'center',
			children: [
				PowerIcon()
			]
			}),
    ]
});
	
export const Dashboard = () =>  PopupWindow({
    name: "dashboard",
    anchor: ["top","bottom", "right"],
    margins: [12, 12, 15],
    transition: "slide_left",
    transitionDuration: 150,
    child: 
        Box({
            vertical:true,
            vexpand:true,
            children: [
                Box({
                    className: "quicktoggles",
                    vertical: true,
                    vexpand: false,
                    children: [
                        quickAccess,
                        /*Box({
                            className: "buttons",
                            children: [
                               WiFi(),
                                BluetoothWidget(),
                            ]
                        }),*/
                    ]   
                }),
				BrightnessSlider(),
                NotificationList(),
            ]
        })
});


