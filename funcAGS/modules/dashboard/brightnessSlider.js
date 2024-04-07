import { Widget, Utils } from "../../imports.js";
import Gio from "gi://Gio";
import Brightness from "./brightness.js";
const { monitorFile, readFile, exec } = Utils
const { Box } = Widget;

const Slider = () =>
	Widget.Slider({
		className: "sldSlider",
		drawValue: false,
		on_change: self => Brightness.screen_value = self.value,
		value: Brightness.bind('screen-value'),
	});
	
const Icon = () =>
	Widget.Label({
		className: "sldIcon",
		//label: Brightness.bind('screen-value').as(v => `${v}`),
		setup: self => self.hook(Brightness, (self, screenValue) => {
        // screenValue is the passed parameter from the 'screen-changed' signal
        const icons = ["󰃚", "󰃛", "󰃜", "󰃝", "󰃞", "󰃟", "󰃠"];
        //self.label = screenValue ?? 0;
        self.label =`${icons[Math.floor((Brightness.screen_value * 100) / 15)]}`;

    }, 'screen-changed'),
	});

export const BrightnessSlider = () =>
	Box({
		className: "Slider",
		vertical: true,
		children: [
			Widget.Label({
				className: "sldLabel",
				label: "Brightness",
				hpack: "start",
			}),
			Box({
				children: [Icon(), Slider()],
			}),
		],
	});
