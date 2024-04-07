import { Widget, Audio } from "../../../imports.js";
const { Box, Button } = Widget;
const { execAsync } = Utils;
const audio = await Service.import('audio');

/** @param {'speaker' | 'microphone'} type */
const speakerSlider = (type = 'speaker') => Widget.Slider({
	className: "sldSlider",
    hexpand: true,
    drawValue: false,
    onChange: ({ value }) => audio[type].volume = value,
    value: audio[type].bind('volume'),
    setup: (self) => {
      self.hook(
			Audio,
			(self) => {
				if (!Audio.speaker) return;
				self.value = Audio.speaker.volume;
			}
		)
    },
});

const micSlider = (type = 'microphone') => Widget.Slider({
	className: "sldSlider",
    hexpand: true,
    drawValue: false,
    onChange: ({ value }) => audio[type].volume = value,
    value: audio[type].bind('volume'),
    setup: (self) => {
      self.hook(
			Audio,
			(self) => {
				if (!Audio.microphone) return;
				self.value = Audio.microphone.volume;
			}
		)
    },
});

const speakerIcon = () => Widget.Button({
	className: "sldIcon",
    on_clicked: () => audio.speaker.is_muted = !audio.speaker.is_muted,
    child: Widget.Icon().hook(audio.speaker, self => {
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
});

const micIcon = () => Widget.Button({
	className: "sldIcon",
    on_clicked: () => audio.microphone.is_muted = !audio.microphone.is_muted,
    child: Widget.Icon().hook(audio.microphone, self => {
        const vol = audio.microphone.volume * 100;
        const icon = [
            [67, 'high'],
            [34, 'medium'],
            [1, 'low'],
            [0, 'muted'],
        ].find(([threshold]) => threshold <= vol)?.[1];
        self.icon = `microphone-sensitivity-${icon}-symbolic`;
        self.tooltip_text = `Microphone ${Math.floor(vol)}%`;
    }),
});

export const VolumeSlider = () => Box({
    className: "Slider",
    vertical: true,
    children: [
        Widget.Label({
            className: "sldLabel",
            label: "Speaker",
            hpack: "center",
        }),
        Box({
            children: [
                speakerIcon(), 
                speakerSlider(),
            ],
		}),
		Widget.Label({
            className: "sldLabel",
            label: "Microphone",
            hpack: "center",
        }),
		Box({
            children: [
				micIcon(),
                micSlider(),
            ],
        }),
    ],
});
