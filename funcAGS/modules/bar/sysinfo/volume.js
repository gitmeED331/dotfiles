import { Widget, Audio, Utils } from "../../../imports.js";
import PopupWindow from "../../../utils/popupWindow.js";
import { VolumeSlider } from "./volumeSlider.js";

const audio = await Service.import('audio');
const { Box, Button } = Widget;
const { execAsync } = Utils;

export const Dashvol = () =>  PopupWindow({
    name: "dashvol",
    anchor: ["top", "right"],
    margins: [3, 12],
    transition: "slide_down",
    layer: "overlay",
    transitionDuration: 150,
    child: 
        Box({
            vertical:true,
            hexpand:false,
            children: [
                VolumeSlider(),
            ]
        })
});

export const Volume = () => Box({
	class_name: 'volume',
	child:
		Button({
			onPrimaryClick: () => { App.toggleWindow("dashvol")},
			onSecondaryClick: () => { audio.speaker.is_muted = !audio.speaker.is_muted },
			child:
				Widget.Icon().hook(audio.speaker, self => {
					const vol = audio.speaker.volume * 150;
					const icon = [
						[101, 'overamplified'],
						[67, 'high'],
						[34, 'medium'],
						[1, 'low'],
						[0, 'muted'],
					].find(([threshold]) => threshold <= vol)?.[1];
					self.icon = `audio-volume-${icon}-symbolic`;
					self.tooltip_text = `Volume ${Math.floor(vol)}%`;
		}),
	}),
});
