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
	vertical: true,
	hexpand: false,
	hpack: 'center',
	children: [
		Box({
			vertical: false,
			hexpand: true,
			hpack: 'center',
			children: [
			PowerIcon(),
			]
		}),
		Box({
			vertical: false,
			hexpand: true,
			hpack: 'center',
			children: [
				Enpass(),
				KontactIcon(),
				VPNIcon(),
				TerminalIcon(),
			]
		}),
    ]
});
	
export const Dashboard = () =>  PopupWindow({
    name: "dashboard",
    anchor: ["top", "bottom", "right"],
    margins: [12, 12, 15],
    transition: "slide_down",
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


